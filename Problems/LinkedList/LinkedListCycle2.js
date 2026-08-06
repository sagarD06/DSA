/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle (head) {
    if (!head || !head.next) return null;

    let fast = head, slow = head, hasCycle = false;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next
        if (fast === slow) {
            hasCycle = true
            break;
        }
    }

    if (hasCycle) {
        fast = head;
        while (fast !== slow) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    } else {
        return null;
    }
};
