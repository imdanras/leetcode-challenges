// Given an array of integers, return the 3rd Maximum Number in 
// this array, if it doesn't exist, return the Maximum Number. 
// The time complexity must be O(n) or less.

var thirdMax = function (nums) {
    var newSort = function (a, b) {
        return a - b;
    }
    nums.sort(newSort);

    if (nums.length < 3) {
        return nums[nums.length - 1];
    } else if (nums.length === 3) {
        return nums[0];
    } else {
        return nums[nums.length - 4]
    }
};