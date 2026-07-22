/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates (s) {
    const stack = [];
    for (let i of s) {
        if (stack.length > 0 && stack.at(-1) === i) {
            stack.pop();
        } else {
            stack.push(i);
        };
    }

    return stack.join('');
};

console.log(removeDuplicates("abbaca")); //"ca"
console.log(removeDuplicates("azxxzy")); //"ay"
