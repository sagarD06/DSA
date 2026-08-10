/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs (head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy, first = dummy.next, second = first.next, nextPair = second.next;
    
    while (second) {
        first.next = nextPair;
        second.next = first;
        prev.next = second;
        prev = first;
        first = prev.next;
        second = first ? first.next : null;
        nextPair = second ? second.next : null
    }

    return dummy.next;
};
