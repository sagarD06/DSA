/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum (nums, k) {
    let prefixSum = new Array(nums.length).fill(0);
    prefixSum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }
    
    const map = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(prefixSum[i] === k) count++;

        const value = prefixSum[i] - k;
        if (map.has(value)) {
            count += map.get(value);
        }

        map.set(prefixSum[i], (map.get(prefixSum[i]) ?? 0) + 1)
    }

    return count;
};

console.log(subarraySum([1,1,1], 2)); //2
console.log(subarraySum([0,0,0,0,0,0,0,0,0,0] ,0)); //55
