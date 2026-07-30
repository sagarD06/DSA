/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths (m, n) {
    const dp = Array.from(
        { length: m },
        () => new Array(n).fill(-1)
    );

    function findPath(row, col) {
        if (row === m - 1 && col === n - 1) return 1;
        if (row >= m || col >= n) return 0;
        if (dp[row][col] !== -1) return dp[row][col];

        return dp[row][col] = findPath(row + 1, col) + findPath(row, col + 1);
    }

    return findPath(0, 0)
};

console.log(uniquePaths(3,7)); //28
