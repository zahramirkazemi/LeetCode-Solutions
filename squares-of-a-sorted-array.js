/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    const result = [];
    let head = 0;
    let tail = nums.length - 1;
  
    while (head <= tail) {
      if (nums[head] ** 2 > nums[tail] ** 2) result.push(nums[head++] ** 2);
      else result.push(nums[tail--] ** 2);
    }
  
    return result.reverse();
  };