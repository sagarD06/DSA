/** A stack datasturcture operates n LIFO principle, A stack can be created with array r linked list based on requirements*/

//Array inplimentation of stack with fixed size
class Stack {
	constructor(size) {
		this.Array = new Array(size); // Create an array of given size
		this.top = -1; // Initialize top to -1 to indicate an empty stack
		this.capacity = size; // Set the capacity of the stack
	}

	// Push an element onto the stack
	push(element) {
		if (this.isFull()) return "Stack OVerflow";
		this.Array[++this.top] = element; // Increment top and add the element
		return "Element pushed to stack";
	}

	// Get the top element
	pop() {
		if (this.isEmpty()) return "Stack Underflow";
		return this.Array[this.top--];
	}

	// Return the top element of the stack
	peek() {
		return this.Array[this.top];
	}

	// Check if the stack is full
	isFull() {
		return this.top === this.capacity - 1;
	}

	// Check if the stack is empty
	isEmpty() {
		return this.top === -1;
	}
}

const stack = new Stack(5); // Create a stack of size 5
console.log(stack.push(10)); // Element pushed to stack
console.log(stack.push(20)); // Element pushed to stack
console.log(stack.push(30)); // Element pushed to stack
console.log(stack.push(40)); // Element pushed to stack
console.log(stack.push(50)); // Element pushed to stack
console.log(stack.push(60)); // Stack OVerflow
console.log(stack.pop()); // 50
console.log(stack.pop()); // 40
console.log(stack.peek()); // 30
console.log(stack.isEmpty()); // false