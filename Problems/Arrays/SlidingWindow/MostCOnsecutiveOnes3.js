/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes (nums, k) {
    let maxCount = 0, j = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            k--;
        }

        while( k < 0){
            if(nums[j] === 0){
                k++;
            }
            j++;
        }

        maxCount = Math.max(maxCount, i - j + 1);       
    }

    return maxCount;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2)) //6
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3)) //10
