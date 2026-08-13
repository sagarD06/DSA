# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head
        
        prev = ListNode(0,head)
        newHead = prev
        temp = head
        lastDup = None

        while temp and temp.next:
            if temp.val == temp.next.val:
                lastDup = temp.val
                while temp and temp.val == lastDup:
                    temp = temp.next
                prev.next = temp
            
            else:
                prev = prev.next
                temp = temp.next

        return newHead.next
