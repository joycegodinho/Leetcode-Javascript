/**
 * Leetcode - longest Common Prefix
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (strs.length == 0) {
        return ""
    }

    strs.sort();
    var first = strs[0];
    var last = strs[strs.length - 1];
    var resp = "";

    for (var i = 0; i <= first.length; i++) {

        var subFirst = first.substring(i - 1, i);
        var subLast = last.substring(i - 1, i);

        if (subFirst == subLast) {
            resp = resp + first.substring(i - 1, i);
        } else {
            break;
        }
    }
    return resp;
};