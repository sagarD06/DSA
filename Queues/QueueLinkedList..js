/**
 * Queue implementation using a linked list.
 * This allows for dynamic resizing and efficient enqueue/dequeue operations.
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.front = null; // Points to the front of the queue
        this.rear = null;  // Points to the rear of the queue
    }

    // Add an element to the queue
    enqueue(data) {
        const newNode = new Node(data);
        if (this.rear) {
            this.rear.next = newNode; // Link the old rear to the new node
        } else {
            this.front = newNode; // If queue was empty, set front to new node
        }
        this.rear = newNode; // Update rear to the new node
        console.log(`Enqueued: ${data}`);
    }

    // Remove an element from the queue
    dequeue() {
        if (!this.front) {
            console.log("Queue is empty");
            return;
        }
        const data = this.front.data;
        this.front = this.front.next; // Move front to the next node
        if (!this.front) {
            this.rear = null; // If queue is now empty, reset rear
        }
        console.log(`Dequeued: ${data}`);
        return data;
    }

    // Peek at the front element without removing it
    peek() {
        if (!this.front) {
            console.log("Queue is empty");
            return;
        }
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return !this.front;
    }                                                               
}