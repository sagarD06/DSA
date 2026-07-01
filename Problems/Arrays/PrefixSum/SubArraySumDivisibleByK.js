/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysDivByK (nums, k) {
    const freqCount = new Int32Array(k);
    freqCount[0] = 1;

    let count = 0, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        let rem = sum % k;
        if (rem < 0) rem += k;

        count += freqCount[rem];

        freqCount[rem]++;
    }

    return count;
};

console.log(subarraysDivByK([4,5,0,-2,-3,1],5)) //7
console.log(subarraysDivByK([2,-2,2,-4],6)) //2
