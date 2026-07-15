
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    while(this.stack.length && this.stack.at(-1)[0] <= price){
        span += this.stack.pop()[1];
    }
    this.stack.push([price,span])
    return span;
};

let obj = new StockSpanner();
let p1 = obj.next(100);
let p2 = obj.next(80);
let p3 = obj.next(60);
let p4 = obj.next(70);
let p5 = obj.next(60);
let p6 = obj.next(75);
let p7 = obj.next(85);

console.log([p1,p2,p3,p4,p5,p6,p7]);
