/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
    let j = 0, minLen = 100000, sum = 0, isTouched = false;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while(i >= j && sum >= target){
            minLen = Math.min(minLen, i - j + 1);
            isTouched = true;
            sum -= nums[j];
            j++;
        } 

    }

    return isTouched ? minLen : 0;
};

console.log(minSubArrayLen(7,[2,3,1,2,4,3])); //2
console.log(minSubArrayLen(4,[1,4,4])); //1
