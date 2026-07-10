/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function minDays (bloomDay, m, k) {

    if (bloomDay.length < (m * k)) return -1;

    function isValid(mid) {
        let totalFlowers = 0, totalB = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                totalFlowers++;
            } else {
                totalFlowers = 0;
            }

            if (totalFlowers === k) {
                totalB++;
                totalFlowers = 0;
            }
        }
        return totalB >= m;
    };

    let start = Math.min(...bloomDay), end = Math.max(...bloomDay), ans = -1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (isValid(mid)) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
};

console.log(minDays([1,10,3,10,2],3,1)); //3
console.log(minDays([7,7,7,7,12,7,7],2,3)); //12
