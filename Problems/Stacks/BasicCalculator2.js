/**
 * @param {string} s
 * @return {number}
 */
function calculate (s) {
    const stack = [];
    let num = 0, prevOp = '+';
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (!isNaN(ch) && ch != ' ') {
            num = num * 10 + Number(ch);
        }

        if (((ch < '0' || ch > '9') && ch != ' ') || i === s.length - 1) {
            switch (prevOp) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    stack.push(Math.trunc(stack.pop() / num));
                    break;
            }

            prevOp = ch;
            num = 0;
        }
    }

    return stack.reduce((a, b) => a + b, 0)
};

console.log(calculate("3+2*2")); //7
console.log(calculate(" 3/2 ")); //1
