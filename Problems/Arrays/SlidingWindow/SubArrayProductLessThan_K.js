/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
    let j = 0; product = 1; count = 0;

    if (k <= 1) return 0; // edge cases

    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];

        while (product >= k) {
            product = Math.floor(product / nums[j]);
            j++;
        } 

        count = count + (i - j + 1)
    };

    return count;
};

console.log(numSubarrayProductLessThanK([10,5,2,6],100)); //8
console.log(numSubarrayProductLessThanK([1,2,3],0)); //0
