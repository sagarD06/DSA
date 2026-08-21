//SOlution 1
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    function serializeNode(node) {
        if (!node) return '#';

        return (',' + node.val + serializeNode(node.left) + serializeNode(node.right));
    }

    const rootStr = serializeNode(root);
    const subRootStr = serializeNode(subRoot);

    return rootStr.includes(subRootStr);
};

//solution 2
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    function sameTree(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;

        return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
    }

    if (!subRoot) return true;
    if (!root && subRoot) return false;
    const match = sameTree(root, subRoot);

    if (!match) {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    } else { return true }

};
