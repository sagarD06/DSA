/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement (nums1, nums2) {
    const stack = [];
    const map = new Map();

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack.at(-1) < nums2[i]) {
            map.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }

    return nums1.map(i => map.get(i) ?? -1);
};

console.log(nextGreaterElement([4,1,2],[4,1,2])); //[-1,3,-1]
console.log(nextGreaterElement([2,4],[1,2,3,4])); //[3,-1]
