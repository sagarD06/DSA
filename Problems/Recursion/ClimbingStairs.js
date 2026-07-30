/**
 * @param {number} n
 * @return {number}
 */

const DP = [];
function climbStairs (n) {
    if (n === 0) return 1;
    if (n < 0) return 0;
    if (DP[n] !== undefined) return DP[n]

    return DP[n] = climbStairs(n - 1) + climbStairs(n - 2);
}; 

console.log(climbStairs(4)); //5
