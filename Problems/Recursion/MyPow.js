/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow (x, n) {
    function calcPow(x, n) {
        if (n === 0) return 1;
        if (x === 0) return 0;
        if (n === 1) return x;

        let res = calcPow(x, Math.floor(n / 2));
        res = res * res;

        if (n % 2 == 1) return res * x;

        return res;
    }

    if (n < 0) {
        return 1 / calcPow(x, Math.abs(n));
    }

    return calcPow(x, n);
};

console.log(myPow(2.00000,10)); //1024.00000
console.log(myPow(2.10000,3)); //9.26100
