/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search (nums, target) {
    let start = 0, end = nums.length - 1;
    function helper(start, end) {
        const mid = start + Math.floor((end - start) / 2);
        if (start > end) return -1;
        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            return helper(start, mid - 1)
        } else {
            return helper(mid + 1, end)
        }
    }

    return helper(start, end);
};

console.log(search([-1,0,3,5,9,12],9)); //4
