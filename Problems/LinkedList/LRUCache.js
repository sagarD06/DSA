class Node {
    constructor(key, value) {
        this.prev = null
        this.key = key
        this.value = value
        this.next = null
    }

}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.head = new Node(-1, -1)
    this.tail = new Node(-1, -1)
    this.head.next = this.tail
    this.tail.prev = this.head
};

LRUCache.prototype.remove = function (node){
    node.prev.next = node.next
    node.next.prev = node.prev
}

LRUCache.prototype.insertAtHead = function (node){
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1
    } else {
        let node = this.cache.get(key)
        this.remove(node)
        this.insertAtHead(node)
        return node.value
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    if (this.cache.has(key)) {
        let existingNode = this.cache.get(key)
        existingNode.value = value;

        this.remove(existingNode);
        this.insertAtHead(existingNode);
    } else {
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insertAtHead(newNode);

        if(this.cache.size > this.capacity){
            let node = this.tail.prev
            this.remove(node);
            this.cache.delete(node.key);
        }
    }

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
