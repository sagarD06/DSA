/**
 * Finds two numbers in an sorted array that add up to a target value.
 * @param {number[]} numbers - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - The indices of the two numbers that add up to the target.
 */

function TwoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

console.log(TwoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(TwoSum([2,3,4], 6)); //[1,3]
console.log(TwoSum([-1,0], -1)); //[1,2]
