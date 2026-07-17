/**
 * @param {number} x
 * @return {number}
 */
function mySqrt (x) {
    let start = 0, end = x, ans = 0;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const square = mid * mid;

        if (square === x) return mid;

        if (square > x) {
            end = mid - 1
        } else {
            ans = Math.max(ans, mid);
            start = mid + 1;
        }

    }
    return ans;
};

console.log(mySqrt(4)); //2
console.log(mySqrt(8)); //2
