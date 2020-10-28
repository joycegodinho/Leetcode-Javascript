// Leetcode - reverse integer

/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit 
signed integer range: [?231,  231 ? 1]. For the purpose of this problem, assume that your 
function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    var s = x.toString();
    var resp = "";

    if (x > 0) {
        for (var i = s.length; i > 0; i--) {
            resp = resp + s.substring(i - 1, i);
        }
        var respInt = parseInt(resp);
        if (respInt >= (2 ** 31) - 1) {
            return 0;
        }

        return resp;
        //Integer.parseInt(resp);         
    } else if (x < 0) {
        for (var i = s.length; i > 1; i--) {
            resp = resp + s.substring(i - 1, i);
        }
        var respInt = parseInt(resp);
        if (-respInt <= -(2 ** 31)) {
            return 0;
        }

        return -respInt;

    } else {
        return 0;
    }

}