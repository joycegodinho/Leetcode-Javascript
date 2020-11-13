/** Search insert position os a target
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let primeiro = 0;
    let ultimo = nums.length - 1;

    while (primeiro <= ultimo) {
        let meio = primeiro + Math.floor((ultimo - primeiro) / 2);
        if (nums[meio] == target) {
            return meio;
        } else if (target < nums[meio]) {
            ultimo = meio - 1;
        } else {
            primeiro = meio + 1;
        }
    }
    return primeiro;

};