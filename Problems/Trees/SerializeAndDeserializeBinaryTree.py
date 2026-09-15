# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:
    i=0
    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return '#'

        return f'{root.val},{self.serialize(root.left)},{self.serialize(root.right)}'
        

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        # return TreeNode(data) if data else None
        arr = data.split(',')
        self.i=0
        return self.build(arr)

    def build(self, arr):
        value = arr[self.i]
        self.i+=1

        if value == "#":
            return None

        root = TreeNode(int(value))

        root.left = self.build(arr)
        root.right = self.build(arr)

        return root
        

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
