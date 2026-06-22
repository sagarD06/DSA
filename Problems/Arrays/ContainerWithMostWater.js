/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea (height) {
    let left = 0, right = height.length - 1, maxCapacity = 0;

    while (left < right) {
        const width = right - left;
        const length = Math.min(height[left], height[right])
        const capacity = width * length;
        maxCapacity = Math.max(maxCapacity, capacity);

        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxCapacity;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); //49
console.log(maxArea([1,1])); //1
