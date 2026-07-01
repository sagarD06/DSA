/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum (nums, k) {
    const map = new Map();
    map.set(0, -1); // when 0 comes as remainder need index up!
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum % k;

        if (map.has(rem)) {
            if (i - map.get(rem) > 1) {
                return true; // checking length is min 2
            }
        } else {
            map.set(rem, i)
        }
    }

    return false;
};

console.log(checkSubarraySum([23,2,4,6,7],6)) //true
console.log(checkSubarraySum([23,2,6,4,7],13)) //false
