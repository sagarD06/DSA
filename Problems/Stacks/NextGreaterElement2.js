/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements (nums) {
    const stack = [];
    let n = nums.length;
    const res = new Array(n).fill(-1);

    for (let i = 0; i < 2 * n; i++) {
        while (stack.length > 0 && nums[stack.at(-1)] < nums[i % n]) {
            res[stack.pop()] = nums[i % n];
        }

        if (i < n) stack.push(i % n);

    }
    return res;
};

console.log(nextGreaterElements([1,2,1])); //[2,-1,2]
console.log(nextGreaterElements([1,2,3,4,3])); //[2,3,4,-1,4]
