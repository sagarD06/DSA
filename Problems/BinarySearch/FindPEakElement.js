/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement (nums) {
    let start = 1, end = nums.length - 2;

    if (nums.length < 2) return 0;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;

        if (nums[mid] > nums[mid + 1]) {
            end = mid - 1
        } else { start = mid + 1 }
    }

    if (nums[0] > nums[1]) return 0;
    if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
};

console.log(findPeakElement([1,2,3,1])); //2
console.log(findPeakElement([1,2,1,3,5,6,4])); //5
