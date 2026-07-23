/**
 * @param {string} s
 * @return {number}
 */
function minAddToMakeValid (s) {
    const stack = [];
    let count = 0;

    if (s.length < 1) return 0;

    for (let i of s) {
        if (i === '(') {
            stack.push(i);
        } else {
            let end = stack.pop();
            if ((i === ')' && end !== '(')) count++;
            else continue;
        }
    }

    return stack.length + count;
};

console.log(minAddToMakeValid("())")); //1
console.log(minAddToMakeValid("(((")); //3
