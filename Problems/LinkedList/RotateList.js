/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight (head, k) {
    if (!head || !head.next) return head;

    let temp = head;
    let n = 1;
    while (temp.next) {
        temp = temp.next;
        n++;
    }

    if (k % n === 0) return head;

    temp.next = head

    let newHead = null;
    let newTail = head;
    for (let i = 0; i < n - (k % n) - 1; i++) {
        newTail = newTail.next;
    }
    newHead = newTail.next
    newTail.next = null;

    return newHead;
};
