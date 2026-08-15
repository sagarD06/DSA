# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        lessHalf = ListNode()
        lessTail = lessHalf
        greaterHalf = ListNode()
        greaterTail = greaterHalf

        temp = head
        while temp:
            if temp.val < x:
                lessTail.next = temp
                lessTail = lessTail.next
            else:
                greaterTail.next = temp
                greaterTail = greaterTail.next

            nextNode = temp.next
            temp.next = None
            temp = nextNode

        lessTail.next = greaterHalf.next

        return lessHalf.next

        


