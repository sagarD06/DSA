class Stack:
    def __init__(self):
        self.stack = []
        
    def length(self):
        return len(self.stack)
    
    def insertToStack(self,value):
        self.stack.insert(0,value)
        
    def removeFromStack(self):
        if(self.length() == 0):
            raise Exception("Stack is empty!")
        else:
            return self.stack.pop(0)
        
    def peek(self):
        if(self.length() == 0):
            raise Exception("Stack is empty!")
        else:
            return self.stack[0]
        
    def printStack(self):
        print(self.stack)
        
st = Stack()
st.insertToStack(10)
st.insertToStack(20)
st.insertToStack(30)
st.insertToStack(40)
st.removeFromStack()
print(st.peek())
st.printStack()