class Dequeue:
    def __init__(self):
        self.dequeue = []
        
    def isEmpty(self):
        return len(self.dequeue) == 0
    
    def insertAtEnd(self,value):
        self.dequeue.append(value)
        
    def inserAtFront(self, value):
        self.dequeue.insert(0,value)
        
    def deleteFromFront(self):
        if(self.isEmpty()):
            print("Queue is empty")
            return
        return self.dequeue.pop(0)
    def deleteFromEnd(self):
        if(self.isEmpty()):
            print("Queue is empty")
            return
        return self.dequeue.pop()
    def printDequeue(self):
        print(self.dequeue)
    
DQ = Dequeue()
DQ.inserAtFront(10)
DQ.inserAtFront(20)
DQ.inserAtFront(30)
DQ.printDequeue()
DQ.insertAtEnd(10)
DQ.insertAtEnd(20)
DQ.insertAtEnd(30)
DQ.printDequeue()
DQ.deleteFromEnd()
DQ.printDequeue()
DQ.deleteFromFront()
DQ.printDequeue()