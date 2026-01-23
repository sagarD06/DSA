class CircularQueue:
    def __init__(self, size):
        self.size = size
        self.circularQueue = [None]*size
        self.front = self.rear = -1 #another way
        # self.rear = -1
        
    def isFull(self):
        return (self.rear+1) % self.size == self.front
    
    def isEmpty(self):
        return self.front == -1
    
    def enqueue(self,value):
        if(self.isFull()):
            print("Your queue is full")
        elif (self.isEmpty()):
            self.rear = self.front = 0
            self.circularQueue[self.rear] = value # not appending just replacing the value
        else:
            self.rear = (self.rear + 1) % self.size #main logic for circular queue % operator
            self.circularQueue[self.rear] = value
        
    def dequeue(self):
        if(self.isEmpty()):
            print("Queue is empty")
        elif(self.front == self.rear):
            print("Removed value: ", self.circularQueue[self.front])
            self.front = self.rear = -1
        else:
            print("Removed value: ", self.circularQueue[self.front])
            self.front = (self.front + 1)% self.size 
            # not poping just moving the pointer so that when new value is inserted it replaces the value

CQ = CircularQueue(5)
print(CQ.isEmpty())
CQ.enqueue(10)
CQ.enqueue(20)
CQ.enqueue(30)
CQ.enqueue(40)
CQ.enqueue(50)
CQ.enqueue(60)
CQ.dequeue()
CQ.dequeue()
CQ.dequeue()
CQ.enqueue(60)