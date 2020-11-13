/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let init = 0;
    let final = nums.length - 1;

    while (init <= final) {

        if (nums[init] != val) {
            init = init + 1;
        } else {
            let temp = nums[init];
            nums[init] = nums[final];
            nums[final] = temp;
            final = final - 1;
        }
    }

    return init;

};

// TESTE
console.log("Teste 01");
let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val)); //eM esreveR

console.log();
console.log("Teste 02");
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(removeElement(nums2, val2)); //eM esreveR