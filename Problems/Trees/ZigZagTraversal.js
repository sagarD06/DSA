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
 * @return {number[][]}
 */
function zigzagLevelOrder (root) {
    if(!root) return [];

    const ans = [];
    const queue = [root];
    let flag = true;
    while (queue.length > 0) {
        const size = queue.length;
        const dequeue = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (flag) {
                dequeue.push(node.val)
            }else{
                dequeue.unshift(node.val)
            }

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        ans.push(dequeue);
        flag = !flag
    }

    return ans;
};
