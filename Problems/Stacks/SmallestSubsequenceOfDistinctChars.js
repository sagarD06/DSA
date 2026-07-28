/**
 * @param {string} s
 * @return {string}
 */
function smallestSubsequence (s) {
    const stack = [];
    const map = new Map();
    const visited = new Set();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (visited.has(ch)) continue;

        while (stack.length && ch < stack.at(-1) && map.get(stack.at(-1)) > i) {
            const top = stack.pop();
            visited.delete(top);
        }

        stack.push(ch);
        visited.add(ch);
    }

    return stack.join('');
};

console.log(smallestSubsequence("bcabc")); //"abc"
