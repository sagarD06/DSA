class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class StackLinkedList {
	constructor() {
		this.top = null;
	}

	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;
		return "Element pushed to stack";
	}
	pop() {
		if (this.isEmpty()) return "Stack underflow";
		const poppedValue = this.top.data;
		this.top = this.top.next;
		return poppedValue;
	}

	peek() {
		if (this.isEmpty()) return "Empty stack";
		return this.top.data;
	}

	isEmpty() {
		return this.top === null;
	}
}

// Example usage
const stackLinkedList = new StackLinkedList();
console.log(stackLinkedList.push(10)); // Element pushed to stack
console.log(stackLinkedList.push(20)); // Element pushed to stack
console.log(stackLinkedList.push(30)); // Element pushed to stack
console.log(stackLinkedList.pop()); // 30
console.log(stackLinkedList.peek()); // 20