/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    if (target >= nums[0]) {
        let j = 0;
        while (j <= nums.length - 1) {
            if (target === nums[j]) {
                return j;
                break;
            } else {
                if (nums[j] > target) {
                    break;
                } else {
                    j++;
                }
            }
        }
        return -1;

    } else if (target <= nums[nums.length - 1]) {
        let i = nums.length - 1;
        while (i >= 0) {
            if (target === nums[i]) {
                return nums.length - (nums.length - i);
                break;

            } else {
                if (nums[i] < target) {
                    break;
                } else {
                    i--;
                }
            }
        }
        return -1;

    } else {
        return -1;
    }

};

// TESTE

let nums1 = [4, 5, 6, 7, 0, 1, 2];
let target1 = 0;
console.log(search(nums1, target1)); //4

let nums2 = [4, 5, 6, 7, 0, 1, 2];
let target2 = 5;
console.log(search(nums2, target2)); //1

let nums3 = [4, 5, 6, 7, 0, 1, 2];
let target3 = 3;
console.log(search(nums3, target3)); //-1

let nums4 = [4, 5, 6, 7, 0, 1, 2];
let target4 = 8;
console.log(search(nums4, target4)); //-1

let nums5 = [1];
let target5 = 0;
console.log(search(nums5, target5)); //-1

let nums6 = [1];
let target6 = 1;
console.log(search(nums6, target6)); //0

let nums7 = [3, 1];
let target7 = 1;
console.log(search(nums7, target7)); //1

let nums8 = [5, 1, 3];
let target8 = 1;
console.log(search(nums8, target8)); //1