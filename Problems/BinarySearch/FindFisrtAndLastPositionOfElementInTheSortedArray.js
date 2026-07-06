/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange (nums, target) {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (nums[mid] === target) {
            let left = mid, right = mid;
            while (left >= 0 && nums[left] === nums[mid]) {
                left--;
            }
            while (right <= nums.length -1 && nums[right] === nums[mid]) {
                right++;
            }

            return [left + 1, right - 1];
        }

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return [-1, -1];
};

console.log(searchRange([5,7,7,8,8,10],8)); //[3,4]
console.log(searchRange([5,7,7,8,8,10],0)); //[-1,-1]
