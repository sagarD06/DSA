/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN (tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let ch = tokens[i];

        if (!isNaN(ch)) {
            stack.push(Number(ch))
        } else {
            let num2 = stack.pop();
            let num1 = stack.pop();
            switch (ch) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    if (num2 !== 0) stack.push(Math.trunc(num1 / num2))
                    break;
            }
        }

    }

    return stack[0];
};

console.log(evalRPN(["2","1","+","3","*"])); //9
console.log(evalRPN(["4","13","5","/","+"])); //6
