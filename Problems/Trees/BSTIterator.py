# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:

    stack : list[TreeNode] = []

    def __init__(self, root: TreeNode | None):
        self.inorder(root)


    def inorder(self, root:TreeNode):
        while root is not None:
            self.stack.append(root)
            root = root.left

        

    def next(self) -> int:
        node : TreeNode = self.stack.pop()
        if node.right:
            self.inorder(node.right)
        return node.val
        


    def hasNext(self) -> bool:
        return len(self.stack) > 0
        


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()
