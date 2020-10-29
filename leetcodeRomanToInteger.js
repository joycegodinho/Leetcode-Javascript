//Leetcode - Roman to Integer
// uso de dicionário

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    dicionario = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 };
    var resp = 0;
    var comp = s.length - 1;

    for (var i = 0; i < comp; i++) {
        if (dicionario[s[i]] < dicionario[s[i + 1]]) {
            resp = resp - dicionario[s[i]];
        } else {
            resp = resp + dicionario[s[i]];
        }
    }
    resp = resp + dicionario[s[comp]];;
    return resp;

};