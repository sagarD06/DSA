/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAbsoluteSum (nums) {
    let currMax = nums[0], maxSum = nums[0], currMin = nums[0], minSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        currMax = Math.max(num, currMax + num);
        maxSum = Math.max(maxSum, currMax);
        currMin = Math.min(num, currMin + num);
        minSum = Math.min(minSum, currMin);
    }

    minSum = Math.abs(minSum);

    return maxSum > minSum ? maxSum : minSum;
};
console.log(maxAbsoluteSum([1,-3,2,3,-4])); //5
console.log(maxAbsoluteSum([2,-5,1,-4,3,-2])); //8
