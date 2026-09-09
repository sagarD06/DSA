# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        minVal = float('-inf')
        maxVal = float('inf')

        def traverse(node,minVal,maxVal):
            if not node:
                return True

            if node.val >= maxVal or node.val <= minVal:
                return False

            return traverse(node.left,minVal,node.val) and traverse(node.right,node.val,maxVal)
        

        return traverse(root,minVal,maxVal)
        
