/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const recursive = function (nums, target, min, max) {

    let mid = min + Math.floor((max - min) / 2)

    if (max >= min) {
        if (nums[mid] == target) {
            return mid
        }
        else if (nums[mid] < target) {
            return recursive(nums, target, mid + 1, max)
        }
        else {
            return recursive(nums, target, min, mid - 1)
        }
    }
    return -1
}
var search = function(nums, target) {
    return recursive(nums, target, 0, nums.length - 1)
};