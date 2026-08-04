
// Definition for singly-linked list.
 function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd (head, n) {
    let dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i < n + 1; i++) {
        fast = fast.next
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

console.log(removeNthFromEnd([1,2,3,4,5],2)); //[1,2,3,5]
