class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class SinglyLinkedList:
    def __init__(self,head=None):
        self.head = head
        
    def insertionAtEnd(self,value):
        temp = Node(value)
        if(self.head != None):
            curr = self.head
            while(curr.next != None):
                curr = curr.next
            curr.next = temp
        else:
            self.head = temp
            
    def insertionAtStart(self,value):
        temp = Node(value)
        temp.next = self.head
        self.head = temp
        
    def insertinAtMid(self,value,newValue):
        temp = Node(newValue)
        curr = self.head
        while(curr):
            if curr.data == value:
                temp.next = curr.next
                curr.next = temp
            curr = curr.next
            
    def removeValue(self,value):
        if(self.head.data == value):
            self.head = self.head.next
        temp = self.head
        while(temp.next and temp.next.data != value):
            temp = temp.next
        if(temp.next):
            temp.next = temp.next.next
        
    def printLL(self):
        temp = self.head
        while(temp.next != None):
            print(temp.data, end=" -> ")
            temp = temp.next
        print(temp.data)  # Print the last node's data
        
        
# Example usage:
first = SinglyLinkedList()
first.insertionAtEnd(10) 
print(first.head.data)  # Output: 10
first.insertionAtEnd(20)
print(first.head.next.data)  # Output: 20
first.insertionAtEnd(30)
first.insertionAtStart(5)
first.insertinAtMid(20,25)
first.insertinAtMid(10,15)
first.removeValue(30)
first.printLL()  # Output: 10 -> 20 -> 30