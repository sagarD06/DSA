/**
 * @param {number[]} nums
 * @return {number}
 */
function rob (nums) {
    const dp = new Array(nums.length).fill(-1);
    function helper(i) {
        if (i >= nums.length) return 0;
        if(dp[i] !== -1) return dp[i];

        let robbed = nums[i] + helper(i + 2);
        let skip = helper(i + 1);

        return dp[i] = Math.max(robbed, skip);
    }

    return helper(0);
};

console.log(rob([1,2,3,1])); //4
console.log(rob([2,7,9,3,1])); //12
