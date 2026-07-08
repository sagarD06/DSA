/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
function shipWithinDays (weights, days) {
    const isValid = (minWeight) => {
        let totalDays = 1, sum = 0;
        for (let weight of weights) {
            sum += weight;
            if (sum > minWeight) {
                sum = weight;
                totalDays++;
            }
        }
        return totalDays <= days;
    }
    let start = Math.max(...weights), end = weights.reduce((a, b) => a + b, 0);
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (isValid(mid)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10],5)); //15
console.log(shipWithinDays([3,2,2,4,1,4],3)); //6
