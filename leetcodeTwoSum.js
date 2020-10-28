/**
 *Given an array of integers nums and an integer target, return indices 
 *of the two numbers such that they add up to target.
 */
var twoSum = function(nums, target) {
    var resp = []
    for (var i = 0; i < nums.length; i++) {

        for (var j = i + 1; j < nums.length; j++) {
            var solution = nums[i] + nums[j];

            if (solution == target) {
                resp.push(i, j);
            }
        }
    }
    return resp

};