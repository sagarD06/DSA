/**
 * A node always stores 2 things, first one is , it store the the data or the value and the second thing is it stores pointer or address to the next Node.
 *
 */

class Node {
	constructor(value) {
		this.value = value; //stores data here
		this.next = null; //stores address of the next node
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	addValueToStart(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
	}
	addValueToEnd(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}
	removeValue(value) {
		if (!this.head) return;
		if (this.head.value === value) {
			this.head = this.head.next;
			return;
		}
		let current = this.head;
		while (current.next && current.next.value !== value) {
			current = current.next;
		}
		if (current.next) {
			current.next = current.next.next;
		}
	}
	findValue(value) {
		let current = this.head;
		while (current) {
			if (current.value === value) {
				return current;
			}
			current = current.next;
		}
		return null;
	}
	printList() {
		let current = this.head;
		let result = "";
		while (current) {
			result += current.value + " -> ";
			current = current.next;
		}
		console.log(result + "null");
	}
}

const list = new LinkedList();
list.addValueToStart(1);
list.addValueToStart(2);
list.addValueToStart(3);
list.printList();
list.addValueToEnd(4);
list.addValueToEnd(5);
list.printList();
list.removeValue(3);
list.removeValue(4);
list.printList();
