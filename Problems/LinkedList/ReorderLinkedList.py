# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        fast = head
        slow = head

        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

        curr = slow.next
        slow.next = None
        prev = None
        next = None
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        firstHalf = head
        secondHalf = prev
        while secondHalf:
            nextNode = firstHalf.next
            nextSecondNode = secondHalf.next
            firstHalf.next = secondHalf
            secondHalf.next = nextNode

            firstHalf = nextNode
            secondHalf = nextSecondNode

