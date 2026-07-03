/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubarraySumCircular (nums) {

    let currSum = 0, maxSum = nums[0], currMin = 0, minSum = nums[0], totalSum = 0;

    for (let num of nums) {
        currSum = Math.max(num, currSum + num);
        maxSum = Math.max(maxSum, currSum);
        currMin = Math.min(num, currMin + num);
        minSum = Math.min(minSum, currMin);
        totalSum += num
    }

    if (maxSum < 0) return maxSum;

    return Math.max(maxSum, (totalSum - minSum));
};

console.log(maxSubarraySumCircular([1,-2,3,-2])); //3
console.log(maxSubarraySumCircular([2,-2,2,7,8,0])); //19
