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
function leftTreeHeight(node) {
    let height = 0;

    while (node) {
        height++;
        node = node.left
    }

    return height;
}

function rightTreeHeight(node) {
    let height = 0;

    while (node) {
        height++;
        node = node.right
    }

    return height;
}
function countNodes (root) {
    if (!root) return 0;

    let leftHeight = leftTreeHeight(root);
    let rightHeight = rightTreeHeight(root);

    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};
