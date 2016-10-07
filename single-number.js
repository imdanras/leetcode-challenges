// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

var singleNumber = function (nums) {
    var sortNumber = function (a, b) {
        return a - b;
    };
    nums = nums.sort(sortNumber);
    if (nums.length === 1) {
        return nums[0];
    }
    for (var i = 0; i < nums.length - 1; i = i + 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1];
};