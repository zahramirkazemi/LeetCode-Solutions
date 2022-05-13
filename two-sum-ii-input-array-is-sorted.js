/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {

    let left = 0,
      right = numbers.length - 1;
  
    while (left < right) {
      const currentSum = numbers[left] + numbers[right];
      if (currentSum === target) {
        return [left+1, right+1];
      }
      if (target < currentSum) {
        right--;
      } else if (target > currentSum) {
        left++;
      }
    }
  };