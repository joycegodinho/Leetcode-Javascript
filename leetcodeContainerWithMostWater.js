var maxArea = function(height) {

    let areaMax = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {

        let area = Math.min(height[i], height[j]) * (j - i);
        areaMax = Math.max(areaMax, area);

        if (height[i] < height[j]) {
            i = i + 1;
        } else {
            j = j - 1;
        }
    }
    return areaMax;
};
// Teste
console.log("Teste");
let height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height1));