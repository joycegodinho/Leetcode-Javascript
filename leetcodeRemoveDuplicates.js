/**
 * Leetcode -  remove duplicates
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var i = 0;
    if (nums.length == 0) {
        return 0;
    }

    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i = i + 1;
            nums[i] = nums[j];
        }
    }

    return i + 1;

};