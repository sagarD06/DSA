/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes (nums) {
    let count = 0, maxCount = 0;
    for (let i of nums) {
        if (i === 0) {
            count = 0;
            continue;
        }
        count++;
        maxCount = Math.max(maxCount, count);

    }
    return maxCount;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); //3
