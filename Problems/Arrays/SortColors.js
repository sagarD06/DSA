/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Algorith name: Dutch National Flag Algorithm
 */
function sortColors(nums) {
    let j = 0;
    let k = nums.length - 1;

    for (let i = 0; i <= k; i++) {
        while (i <= k && nums[i] === 2) {
            [nums[i], nums[k]] = [nums[k], nums[i]];
            k--;
        }

        if(nums[i] === 0){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            j++;
        }

    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
console.log(sortColors([2,0,1])); // [0,1,2]
console.log(sortColors([2])); // [2]