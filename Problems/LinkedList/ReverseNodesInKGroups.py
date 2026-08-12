# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0,head)
        groupPrev = dummy
        ref = groupPrev.next
        count = 0

        while(groupPrev.next):
            while(count < k and ref):
                ref = ref.next
                count += 1

            if count < k:
                break

            prev = None 
            next = None
            curr = groupPrev.next

            for _ in range(k):
                next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            
            groupStart = groupPrev.next

            groupPrev.next = prev
            groupStart.next = curr
            groupPrev = groupStart
            ref = groupPrev.next
            count=0

        return dummy.next
