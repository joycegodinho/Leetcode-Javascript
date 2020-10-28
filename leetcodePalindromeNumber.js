/**
 * @param {number} x
 * @return {boolean}
 */

//Determine whether an integer is a palindrome.

var isPalindrome = function(x) {
    
        var s = x.toString();
        //char[] s= r.toCharArray();
        var i = 0;
        var j = s.length - 1;
        var igual = true;

        if(s.length > 2){

            while (j > 1 && igual){
                if (s[i]!=s[j]){
                    igual = false;
                }
                i++;
                j--;
            }
            return igual;
        }

        else if(s.length == 2){
            if(s[0]!=s[1]){
                igual = false;
            }
            return igual;
        }
        return igual;
};