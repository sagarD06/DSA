/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin (nums) {
    let start = 0, end = nums.length - 1;

    while (start < end) {
        const mid = start + Math.floor((end - start) / 2);

        if (nums[mid] >= nums[end]) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return nums[start];
};

console.log(findMin([3,4,5,1,2])); //1
console.log(findMin([2,1])); //1
