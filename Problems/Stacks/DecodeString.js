/**
 * @param {string} s
 * @return {string}
 */
function decodeString (s) {
    const stack = [];

    for (let ch of s) {
        if (ch !== ']') {
            stack.push(ch);
            continue;
        }
        let curr = stack.pop();
        let str = '';

        while (curr !== '[') {
            str = curr + str;
            curr = stack.pop()
        }

        let num = '';
        curr = stack.pop();
        while (!isNaN(curr)) {
            num = curr + num;
            curr = stack.pop();
        }
        stack.push(curr);
        stack.push(str.repeat(Number(num)));
    }

    return stack.join('');
};

console.log(decodeString("3[a]2[bc]")); //"aaabcbc"
console.log(decodeString("2[abc]3[cd]ef")); //"abcabccdcdcdef"
