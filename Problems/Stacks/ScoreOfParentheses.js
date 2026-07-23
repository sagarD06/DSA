/**
 * @param {string} s
 * @return {number}
 */
function scoreOfParentheses (s) {
    const stack = [0];

    if (s.length < 1) return 0;

    for (let i of s) {
        if (i === '(') {
            stack.push(0);
        } else {
            let end = stack.pop();
            if (end === 0) {
                stack[stack.length - 1] += 1
            } else {
                stack[stack.length - 1] += 2 * end;
            }
        }
    }

    return stack[0];
};

console.log(scoreOfParentheses("(())")); //2
console.log(scoreOfParentheses("()()")); //2
