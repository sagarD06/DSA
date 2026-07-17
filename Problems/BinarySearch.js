/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search (nums, target) {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};

console.log(search([-1,0,3,5,9,12],9)); //4
console.log(search([-1,0,3,5,9,12],2)); //-1
