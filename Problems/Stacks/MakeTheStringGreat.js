/**
 * @param {string} s
 * @return {string}
 */
function makeGood (s) {
    const stack = [];
    for (let i of s) {
        const top = stack.at(-1);
        if (stack.length > 0 && top.toLowerCase() === i.toLowerCase() && top !== i) {
            stack.pop();
        } else {
            stack.push(i);
        };
    }

    return stack.join('');
};

console.log(makeGood("leEeetcode")); //"leetcode"
console.log(makeGood("abBAcC")); //""
