class Node:
    def __init__(self, value=None):
        self.prev = None
        self.data = value
        self.next = None
        
class DoublyLL:
    def __init__(self):
        self.head = None

    def insertionAtEnd(self,value):
        temp = Node(value)
        if(self.head == None):
            self.head = temp
            return
        curr = self.head
        while(curr.next != None):
            curr = curr.next
        curr.next = temp
        temp.prev = curr

    def insertAtFront(self,value):
        temp = Node(value)
        if(self.head == None):
            self.head = temp
            return
        temp.next = self.head
        self.head.prev = temp
        self.head = temp
        
    def insertAtValue(self,existingValue, newValue):
        temp = Node(newValue)
        curr = self.head
        while(curr.next != None):
            if(curr.data == existingValue):
                break
            else:
                curr = curr.next
        temp.next = curr.next
        curr.next.prev = temp
        temp.prev = curr
        curr.next = temp
        
    def removeValue(self, value):
        if(self.head == None):
            print("Empty Linked List")
            return

        curr = self.head
        if(curr.data == value):
            self.head = curr.next
            self.head.prev = None
            return

        while(curr.next != None):
            if(curr.data == value):
                curr.prev.next = curr.next
                curr.next.prev = curr.prev
                return
            else:
                curr = curr.next

        curr.prev.next = None
        curr.prev = None

    def printLL(self):
        temp = self.head
        while(temp.next != None):
            print(temp.data, end=" <-> ")
            temp = temp.next
        print(temp.data)  # Print the last node's data
        

obj = DoublyLL()
obj.insertionAtEnd(10)
obj.insertionAtEnd(20)
obj.insertionAtEnd(30)
obj.insertionAtEnd(40)
obj.insertionAtEnd(50)
obj.insertAtFront(5)
obj.removeValue(20)
obj.removeValue(40)
obj.removeValue(5)
obj.printLL()