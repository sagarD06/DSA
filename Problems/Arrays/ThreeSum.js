/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const newTarget = 0 - nums[i];
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      const sum = nums[j] + nums[k];

      if (sum === newTarget) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }

      if (sum < newTarget) {
        j++;
      } else if (sum > newTarget) {
        k--;
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // []
console.log(threeSum([[0,0,0]])); // [[0,0,0]]
