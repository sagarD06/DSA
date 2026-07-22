/**
 * @param {string} s
 * @return {number}
 */
function minLength (s) {
    const stack = [];

    for (let i of s) {
        const top = stack.at(-1);
        if ((top === 'A' && i === 'B') || (top == 'C' && i == 'D')) {
            stack.pop();
        } else {
            stack.push(i)
        }
    }
    return stack.length;
};

console.log(minLength("ABFCACDB")); //2
console.log(minLength("ACBBD")); //5
