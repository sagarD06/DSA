/**
 * @param {number} n
 * @return {number}
 */

const dp = new Array(31).fill(-1);
function fib (n) {
    if (n <= 1) return n;
    if (dp[n] !== -1) return dp[n];

    return dp[n] = fib(n - 1) + fib(n - 2);
};

console.log(fib(5)); //5
