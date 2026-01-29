class Node:
    def __init__(self, value):
        self.left = None
        self.data = value
        self.right = None
        
def insert(root, value):
    if(root == None):
        return Node(value)
    if(root.data == value):
        return root
    if(root.data > value):
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

def search(root, value):
    if(root == None):
        print("value not found!", end="\n")
        return
    if(root.data == value):
        print("value found!", end="\n")
        return
    if(root.data > value):
        search(root.left, value)
    else:
        search(root.right, value)

def inOrderSuccessor(root):
    root = root.right # one step to right
    # continue to left till end
    while(root != None and root.left != None):
        root = root.left
    return root # rertuns successor

def delete(root,value):
    if(root == None):
        return root
    if(root.data > value):
        root.left = delete(root.left, value)
    elif(root.data < value):
        root.right = delete(root.right, value)

    else:
        if(root.left == None):
            return root.right
        if(root.right == None):
            return root.left
        else:
            successor = inOrderSuccessor(root)
            root.data = successor.data
            root.right = delete(root.right, successor.data) # delete the successor and root.right because as we know that the node is on the right side of the root (1 step right continue left)
    return root
    
def InOrderTraversal(root):
    if(root != None):
        InOrderTraversal(root.left)
        print(root.data, end=" ")
        InOrderTraversal(root.right)
        
# root = Node(20)
# root.left =  Node(15)
# root.right = Node(30)
# root.left.left = Node(12)
# root.left.right = Node(18)
# root.right.left = Node(25)
# root.right.right = Node(40)

root = insert(None, 20)
root = insert(root, 15)
root = insert(root, 30)
root = insert(root, 40)
root = insert(root, 12)
root = insert(root, 18)
root = insert(root, 25)
root = insert(root, 50)
# best practice is to assume that the our tree is open to getting updated so store the root always

InOrderTraversal(root)
# search(root, 40)
# search(root, 90)
# search(root, 30)
delete(root,50)
print()
InOrderTraversal(root)