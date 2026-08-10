/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function pairSum (head) {
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
 
    let current = slow;
    let prev = null;

    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }

    let firstHalf = head;
    let secondHalf = prev;
    let max = 0;

    while(secondHalf){
        max = Math.max(max, firstHalf.val + secondHalf.val);
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return max;
};
