/**
 * @param {number[]} nums
 * @return {number}
 */
//need two products to finally see maximum possible product as even negative can make product bigger

function maxProduct (nums) {
    let maxProd = 1, minProd = 1, result = Math.max(...nums);

    for (let i = 0; i < nums.length; i++) {
        const temp = maxProd * nums[i];
        maxProd = Math.max(temp, minProd * nums[i], nums[i]);
        minProd = Math.min(temp, minProd * nums[i], nums[i]);
        result = Math.max(result, maxProd);
    }

    return result;
};
console.log(maxProduct([2,3,-2,4])); //6
console.log(maxProduct([-2,0,-1])); //0
