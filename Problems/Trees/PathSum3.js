/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const prefixSum = new Map();
    prefixSum.set(0, 1);

    function dfs(node, currentSum) {
        if (!node) return 0;

        currentSum += node.val;

        let count = prefixSum.get(currentSum - targetSum) || 0;

        prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);

        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);

        prefixSum.set(currentSum, prefixSum.get(currentSum) - 1);
        return count;
    }

    return dfs(root, 0)
};
