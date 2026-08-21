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
 * @return {boolean}
 */
function hasPathSum (root, targetSum) {
    function traverse(node, target) {
        if (!node) return false;

        target -= node.val;

        if (!node.left && !node.right) return target === 0;

        return traverse(node.left, target) || traverse(node.right, target);
    }

    return traverse(root, targetSum);
};
