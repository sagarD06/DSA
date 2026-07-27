/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits (num, k) {
    if (num.length === k) return "0";

    const stack = [];
    for (let i of num) {
        while (stack.length && k > 0 && i < stack.at(-1)) {
            stack.pop();
            k--;
        }
        stack.push(i);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    let res = stack.join('');
    let i = 0;
    while (res[i] === '0') {
        i++;
    }
    const ans = res.substring(i);
    return ans !== "" ? ans : "0";
};

console.log(removeKdigits("1432219",3)); //"1219"
console.log(removeKdigits("10200",1)); //"200"
