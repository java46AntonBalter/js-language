function encode(num, str) {
    let res = "";
    const base = str.length;
    for(let i = 0; i<str.length; i++) {
        if(i != str.lastIndexOf(str[i])){
            console.log('ERROR: There are duplicate symbols in the codingString!!!');
            return NaN;
        }
    }
    do  {
        const digit = Math.trunc(num % base);
        res = codingString[digit] + res;
        num = Math.trunc(num / base);
    } while (num > 0);
    return res;
}

const codingString = ".-"
console.log(encode(5, codingString));
