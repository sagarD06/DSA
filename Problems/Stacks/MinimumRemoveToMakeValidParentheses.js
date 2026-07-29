/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid (s) {
    const stack = [];
    let arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push(i);
        } else if (arr[i] === ')') {
            if (stack.length) stack.pop();
            else arr[i] = "";
        }
    }

    while (stack.length) {
        arr[stack.pop()] = "";
    }

    return arr.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)")); //"lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")); //"ab(c)d"
