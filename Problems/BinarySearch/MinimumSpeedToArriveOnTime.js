/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
function minSpeedOnTime (dist, hour) {
    let start = 1, end = 10000000, ans = -1;

    if (dist.length - 1 >= hour) return -1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        let totalHours = 0;
        for (let d of dist) {
            totalHours = Math.ceil(totalHours);
            totalHours += (d / mid);
        }

        if (totalHours <= hour) {
            ans = mid
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
};

console.log(minSpeedOnTime([1,3,2],6)); //1
console.log(minSpeedOnTime([1,1,100000],2.01)); //100000
