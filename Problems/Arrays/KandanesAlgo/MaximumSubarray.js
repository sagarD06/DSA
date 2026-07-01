/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray (nums) {
    let sum = nums[0], maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {

        if (sum < 0) {
            sum = 0;
        }
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6
console.log(maxSubArray([5,4,-1,7,8])); //23
