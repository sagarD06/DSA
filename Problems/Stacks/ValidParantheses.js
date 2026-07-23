/**
 * @param {string} s
 * @return {boolean}
 */
function isValid (s) {
    const stack = [];

    for (let i of s) {
        if (i === '(' || i === '[' || i === '{') {
            stack.push(i);
        } else {
            let end = stack.pop();
            if ((i === ')' && end !== '(') || (i === ']' && end !== '[') || (i === '}' && end !== '{')) return false;
            else continue;
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}")); //true
console.log(isValid("([)]")); //false;
