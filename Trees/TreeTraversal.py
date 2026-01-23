class Node:
    def __init__(self, value):
        self.left = None
        self.data = value
        self.right = None
        
        
def preOrderTraversal(root):
    if(root != None):
        print(root.data, end=" -> ")
        preOrderTraversal(root.left)
        preOrderTraversal(root.right)
    
def inOrderTraversal(root):
    if(root != None):
        inOrderTraversal(root.left)
        print(root.data, end=" -> ")
        inOrderTraversal(root.right)
    
def postOrderTraversal(root):
    if(root != None):
        postOrderTraversal(root.left)
        postOrderTraversal(root.right)
        print(root.data, end=" -> ")
    
root = Node(1)
root.left = Node(3)
root.right = Node(5)
root.left.left = Node(2)
root.left.right = Node(4)
root.right.right = Node(8)

print("Pre Order")
preOrderTraversal(root)
print()
print("In Order")
inOrderTraversal(root)
print()
print("Post Order")
postOrderTraversal(root)