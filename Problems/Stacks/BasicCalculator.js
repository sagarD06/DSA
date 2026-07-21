/**
 * @param {string} s
 * @return {number}
 */
function calculate (s) {
    const stack = [];
    let num = 0, result = 0, sign = 1;

    for (let ch of s) {
        if (ch == '+' || ch == '-') {
            result += sign * num;
            ch === '+' ? sign = 1 : sign = -1;
            num = 0;
        }

        if (ch === '(') {
            stack.push(result, sign);
            result = 0;
            num = 0;
            sign = 1;
        }

        if (ch === ')') {
            result += sign * num;
            num = 0;
            sign = stack.pop();
            let prevNum = stack.pop();
            result = prevNum + (sign * result);
        }

        if (!isNaN(ch) && ch !== " ") num = num * 10 + Number(ch);
    }

    result += sign * num;

    return result;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)")); //23
console.log(calculate(" 2-1 + 2 ")); //3
