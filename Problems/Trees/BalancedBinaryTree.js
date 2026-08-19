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
 * @return {boolean}
 */
var isBalanced = function (root) {
    function traverse(root) {
        if (!root) return 0;

        let hl = traverse(root.left);
        if (hl === -1) return -1;
        let hr = traverse(root.right);
        if (hr === -1) return -1;

        if (Math.abs(hl - hr) > 1) return -1;

        return 1 + Math.max(hl, hr);
    }

    return traverse(root) !== -1;
};
