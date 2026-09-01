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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins (root, x, y) {
    const queue = [root];

    while (queue.length > 0) {
        const size = queue.length;
        let flagX = false;
        let flagY = false;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.val === x) flagX = true;
            if (node.val === y) flagY = true;

            if (node.left && node.right) {
                if ((node.left.val === x && node.right.val === y) ||
                    (node.left.val === y && node.right.val === x)) { return false; }
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (flagX && flagY) return true;

        if (flagX || flagY) return false;

    }
    return false;
};
