# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        self.inorder_map = {val:i for i,val in enumerate(inorder)}
        self.postorder_index = len(postorder) - 1
        return self.build(postorder, 0, len(inorder)-1)

    def build(self, postorder,left, right):

        if left > right:
            return None

        root = TreeNode(postorder[self.postorder_index])
        self.postorder_index -= 1

        inorder_index = self.inorder_map[root.val]

        root.right = self.build(postorder, inorder_index + 1, right)
        root.left = self.build(postorder, left, inorder_index - 1)

        return root
        
