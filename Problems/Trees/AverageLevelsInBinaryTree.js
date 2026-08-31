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
 * @return {number[]}
 */
function averageOfLevels (root) {
    if (!root) return [];
    const queue = [root];
    const ans = [];

    while (queue.length > 0) {
        const size = queue.length;
        let sum = 0;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        ans.push(sum / size);
    }
    return ans;
};
