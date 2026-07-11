/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Key here is mid is the limit with which the sum should lie not equal to it
 * more counts lesser the sum!! point to be remembered
 */
function splitArray (nums, k) {
    if (nums.length < k) return -1;

    let start = Math.max(...nums), end = nums.reduce((a, b) => a + b, 0), ans = -1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        let sum = 0, count = 1;
        for (let i = 0; i < nums.length; i++) {

            if (sum + nums[i] > mid) {
                count++;
                sum = nums[i];
            } else {
                sum += nums[i];
            }
        }

        if (count <= k) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
};

console.log(splitArray([7,2,5,10,8],2)); //18
console.log(splitArray([1,2,3,4,5],2)); //9
