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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let maxD = 0;
    function traverse(root) {
        if (!root) return 0;

        let hl = traverse(root.left);

        let hr = traverse(root.right)

        maxD = Math.max(maxD,  hl + hr);

        return Math.max(hl, hr) + 1;
    }

    traverse(root);
    return maxD;
};
