/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    // retirar os espaços

    s = s.trim();

    // declaração de variáveis

    let numerico = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let semLetra = true;
    let i = 0;
    let resp = "";
    let sinal = 1;

    // avaliação dos sinais

    if (s[0] === "-") {
        sinal = -1;
        i = 1;
    }

    if (s[0] === "+") {
        i = 1;
    }

    //avaliação dos numeros

    while (semLetra) {
        if (s[i] in numerico) {
            resp = resp + s[i];
            i = i + 1;

        } else {
            semLetra = false;
        }

    }
    resp = resp * sinal;

    //avaliação do tamanho

    if (resp >= 2147483647) {
        return 2147483647;
    } else if (resp <= -2147483648) {
        return -2147483648;
    }

    //resposta

    return resp;

};

// TESTE

console.log(myAtoi("42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("   -42"));
console.log(myAtoi("-91283472332"));