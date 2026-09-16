# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    first: TreeNode | None = None
    second: TreeNode | None = None
    prev: TreeNode | None = None

    def recoverTree(self, root: TreeNode | None) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        self.inorder(root)
        self.first.val, self.second.val = self.second.val, self.first.val

    def inorder(self, root):
        if not root:
            return None

        self.inorder(root.left)

        if self.prev and self.prev.val > root.val:
            if not self.first:
                self.first = self.prev
            self.second = root

        self.prev = root

        self.inorder(root.right)

