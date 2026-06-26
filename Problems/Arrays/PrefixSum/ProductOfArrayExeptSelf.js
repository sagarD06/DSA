/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf (nums) {
    let prefix = new Array(nums.length).fill(0);
    prefix[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        suffix *= nums[i + 1];
        prefix[i] *= suffix;
    }

    return prefix;
};

console.log(productExceptSelf([1,2,3,4])); //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); //[0,0,9,0,0]
