/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.stack = [];
    this.size = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.stack.length < this.size) this.stack.push([x, 0]);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (this.stack.length) {
        let poped = this.stack.pop();

        if (this.stack.length) this.stack[this.stack.length - 1][1] += poped[1];

        return poped[0] + poped[1];

    } else {
        return -1
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    let ele = Math.min(this.stack.length, k);

    if (this.stack.length && ele > 0) this.stack[ele - 1][1] += val;

};

 
//Your CustomStack object will be instantiated and called as such:
var obj = new CustomStack(3)
obj.push(1);
obj.push(2);
var param_2 = obj.pop()
obj.increment(2,100)

console.log(param_2);
 
