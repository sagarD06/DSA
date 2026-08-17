class Node {
    constructor(key, value, freq) {
        this.key = key;
        this.value = value;
        this.freq = freq;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = new Node(-1, -1, -1)
        this.tail = new Node(-1, -1, -1)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev
    }

    insertAtHead(node) {
        node.prev = this.head
        node.next = this.head.next

        this.head.next.prev = node
        this.head.next = node
    }
}
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.capacity = capacity
    this.cache = new Map();
    this.freqCache = new Map();
    this.minFreq = 1;
    this.head = new Node(-1, -1, -1);
    this.tail = new Node(-1, -1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LFUCache.prototype.increaseFrequency = function (node) {
    let frequency = node.freq;
    const oldDll = this.freqCache.get(frequency)
    oldDll.remove(node);
    if (oldDll.head.next === oldDll.tail) {
        this.freqCache.delete(node.freq)
        if (node.freq === this.minFreq) {
            this.minFreq = node.freq + 1;
        }
    }

    node.freq++;

    let newDll = this.freqCache.get(node.freq) ?? new DLL();

    newDll.insertAtHead(node);
    this.freqCache.set(node.freq, newDll);
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let existingNode = this.cache.get(key);
        this.increaseFrequency(existingNode);
        return existingNode.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.capacity === 0) return;

    if (this.cache.has(key)) {
        const existingNode = this.cache.get(key);
        existingNode.value = value;
        this.increaseFrequency(existingNode);
        return;
    }

    if (this.cache.size >= this.capacity) {
        const nodeToRemoveFromDll = this.freqCache.get(this.minFreq);
        const evictedNode = nodeToRemoveFromDll.tail.prev;

        nodeToRemoveFromDll.remove(evictedNode);
        this.cache.delete(evictedNode.key);
        if (nodeToRemoveFromDll.head.next === nodeToRemoveFromDll.tail) {
            this.freqCache.delete(this.minFreq);
        }
    }
    let newNode = new Node(key, value, 1)
    this.cache.set(key, newNode);
    let dll = this.freqCache.get(1) ?? new DLL();
    this.freqCache.set(newNode.freq, dll);
    dll.insertAtHead(newNode);
    this.minFreq = 1;
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
