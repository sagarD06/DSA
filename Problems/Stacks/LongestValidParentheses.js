/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses (s) {
    const stack = [-1];
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length < 1) stack.push(i);
            else length = Math.max(length, i - stack.at(-1));
        }
    }

    return length;
};

console.log(longestValidParentheses("(()")); //2
console.log(longestValidParentheses(")()())")); //4
