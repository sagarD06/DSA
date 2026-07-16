/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea (heights) {
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        const h = i < heights.length ? heights[i] : 0;
        while (stack.length && heights[stack.at(-1)] >= h) {
            const height = heights[stack.pop()];
            const left = stack.length ? stack.at(-1) : - 1;
            let Area = (i - left - 1) * height;
           if(Area > maxArea) maxArea = Area;
        }
        stack.push(i);
    }

    return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3])); //10
console.log(largestRectangleArea([2,4])); //4
