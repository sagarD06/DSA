
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (val) {

    if (this.stack.length === 0) {
        this.stack.push([val, val]);
    } else {
        if (this.stack.at(-1)[1] > val) {
            this.stack.push([val, val]);
        } else {
            this.stack.push([val, this.stack.at(-1)[1]]);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.at(-1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack.at(-1)[1];
};

//Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()

console.log(param_3,param_4);
