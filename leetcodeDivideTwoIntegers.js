/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
        let divisao = dividend/divisor;

        if (divisao >= 2147483647){
            return 2147483647;
        }

        else if (divisao <= -2147483648){
            return -2147483648;
        }

        else{
            let divid = Math.abs(dividend);
            let div = Math.abs(divisor);
            let cont = 0;
            let sign = 1;

            if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)){
                sign = -1;
            }

            while(divid >= div){
                let temp = div;
                let cont2 = 1;
                while (divid >= temp){
                    divid = divid - temp;
                    cont = cont + cont2;
                    temp = temp + temp;
                    cont2 = cont2 + cont2 ;                   
                }
            }
            return sign * cont; 
        }
    
};