# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        self.start = 0
        def dfs(preorder,upperbound):
            
            if(self.start == len(preorder) or preorder[self.start] > upperbound):
                return None

            root = TreeNode(preorder[self.start])
            self.start += 1

            root.left = dfs(preorder,root.val)
            root.right = dfs(preorder,upperbound)

            return root
        return dfs(preorder,float('inf'))
            
