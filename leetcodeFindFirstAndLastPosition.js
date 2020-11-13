/** Find first and last position of a target in a array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let resp = [-1, -1];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            resp[0] = i;
            break;
        }
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] == target) {
            resp[1] = j;
            break;
        }
    }

    return resp;
};

// TESTE

let nums1 = [5, 7, 7, 8, 8, 10];
let target1 = 8;
console.log(searchRange(nums1, target1));