/* Structure of Binary Tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
    leftView(root) {
        // code here
        if(!root) return [];

        const queue = [root];
        const res = [];

        while (queue.length > 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                if(i===0) res.push(node.data)

                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        }

        return res;
    }
}
