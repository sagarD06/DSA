/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert (nums, target) {
    let start = 0, end = nums.length-1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

    }
    return start;
};

console.log(searchInsert([1,3,5,6],5)); //2
console.log(searchInsert([1,3,5,6],2)); //1
