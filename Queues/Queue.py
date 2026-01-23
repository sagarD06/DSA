class Queue:
    def __init__(self):
        self.queue = []
        
    def isEmpty(self):
        return len(self.queue) == 0
    
    def insert(self,value):
        self.queue.append(value)
        
    def delete(self):
        if(self.isEmpty()):
            print("Queue is empty")
            return
        return self.queue.pop(0)
    
Q = Queue()
Q.insert(10)
Q.insert(20)
Q.insert(30)
Q.insert(40)
print(Q.delete())
print(Q.delete())
print(Q.delete())
print(Q.delete())
print(Q.delete())
print(Q.isEmpty())