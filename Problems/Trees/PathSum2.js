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
 * @return {number[][]}
 */
function pathSum (root, targetSum) {
    let res = [], currentPath = [];
    function traverse(node, res, currentPath, target) {
        if (!node) return;
        
        currentPath.push(node.val)
        target -= node.val

        if (!node.left && !node.right && target === 0) {
            res.push([...currentPath]);
            return;
        }

        if (node.left) { traverse(node.left, res, currentPath, target); currentPath.pop(); }
        if (node.right) { traverse(node.right, res, currentPath, target); currentPath.pop(); }
    }

    traverse(root, res, currentPath, targetSum)
    return res;
};
