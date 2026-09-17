# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# TC: O(N)
class Solution:
    def kthSmallest(self, root: TreeNode | None, k: int) -> int:
        arr = []
        def dfs(root):
            if root is None:
                return

            dfs(root.left)
            arr.append(root.val)
            dfs(root.right)

        dfs(root)

        return arr[k-1]
        
#----------------------------------------------------------------------------------
#Solution 2 O(H+K) Optimal SOlution
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: TreeNode | None, k: int) -> int:
        arr = []
        curr = root

        while curr or arr:
            while curr is not None:
                arr.append(curr)
                curr = curr.left

            curr = arr.pop()
            k -= 1
            if k == 0 : return curr.val

            curr = curr.right


