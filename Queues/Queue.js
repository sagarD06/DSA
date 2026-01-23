/**
 * Queue is a simple array works on FIFO principle.
 * It provides methods to add, remove, and check the size of the queue.
 */

//Only using array - simple queue implementation
const Queue = [];
//to add an element to the queue
Queue.push(5);
//to remove an element from the queue
Queue.shift(); //Shift removes first element from the array

// Array based queue implementation
class QueueArray {
	constructor(capacity) {
		this.size = capacity; // Current size of the queue
		this.queue = new Array(this.size);
		this.front = 0; // Index of the front element
		this.rear = -1; // Index of the rear element
	}
	// Add an element to the queue
	enqueue(element) {
		if (this.isFull()) {
			console.log("Queue is full");
			return;
		}
		this.rear++;
		this.queue[this.rear] = element;
		console.log(`Enqueued: ${element}`);
        return element;
	}
	//Remove an element from the queue
	dequeue() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return;
		}
		const element = this.queue[this.front];
		this.front++;
		if (this.front > this.rear) {
			this.front = 0;
			this.rear = -1; // Reset the queue
		}
		console.log(`Dequeued: ${element}`);
		return element;
	}

    //peek method to get the front element without removing it
    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty");
			return;
        }
        return this.queue[this.front];
    }

	//IsEmpty method to check if the queue is empty
	isEmpty() {
		return this.rear === -1;
	}
	//IsFull method to check if the queue is full
	isFull() {
		return this.rear === this.size - 1;
	}
}

// Example usage
const queue = new QueueArray(5);
queue.enqueue(1);    
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6); // This will show "Queue is full"
queue.dequeue(); // Removes 1
queue.dequeue(); // Removes 2
console.log(queue.peek()); // Should print 3
queue.dequeue(); // Removes 3       
queue.dequeue(); // Removes 4
queue.dequeue(); // Removes 5
console.log(queue.isEmpty()); // Should print true
queue.dequeue(); // This will show "Queue is empty"
