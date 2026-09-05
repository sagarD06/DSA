// Solution 1------------------------------
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
function connect (root) {
    if(!root) return null;

    let leftMost = root;

    while(leftMost.left){
        let current = leftMost;

        while(current){
            current.left.next = current.right

            if(current.next){
                current.right.next = current.next.left
            }

            current = current.next
        }

        leftMost = leftMost.left;
    }

    return root;
};

//Solution 2 ----------------------------------------
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
function connect (root) {
    if(!root) return null;

    const queue = [root];
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if(i < size-1){
                node.next = queue[0];
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return root;
};
