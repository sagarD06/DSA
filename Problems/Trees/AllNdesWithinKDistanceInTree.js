/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

const parentMap = new Map();
function buildParentMap(root, parent) {
    if (!root) return;
    parentMap.set(root, parent);

    buildParentMap(root.left, root);
    buildParentMap(root.right, root);
}
function distanceK (root, target, k) {
    buildParentMap(root, null);

    const visited = new Set();

    const ans = [];

    function traverse(node, dist) {
        if (!node) return;


        if (visited.has(node)) return;

        if (dist === k) {
            ans.push(node.val)
            return
        };

        visited.add(node);

        if (node.left) traverse(node.left, dist + 1);
        if (node.right) traverse(node.right, dist + 1);

        const parentNode = parentMap.get(node);
        if (parentNode) traverse(parentNode, dist + 1);
    }

    traverse(target, 0);
    return ans;
};
