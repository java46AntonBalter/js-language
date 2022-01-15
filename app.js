const codingString = 'qwertyuiopasdfghjklzxcvbnm';
const num = 466600005555;
console.log(`base is: ${codingString.length}`);
const dupeCheckRes = charDupe(codingString);
console.log(`Dupe Check: ${dupeCheckRes}`);

if(dupeCheckRes == true){
    console.log('ERROR: There are duplicate symbols in the codingString!!!');
}
else if(dupeCheckRes == false){
    console.log(encode(num, codingString));
}

function charDupe(str) {
    for(let i = 0; i<str.length; i++) {
        if(str.indexOf(str[i]) != str.lastIndexOf(str[i])){
            return true;
        }
    }
    return false
}

function encode(num, str) {
    let res = "";
    do  {
        let base = str.length;
        const digit = Math.trunc(num % base);
        const symb = getSymbol(digit);
        res = symb + res;
        num = Math.trunc(num / base);
    } while (num >= 1);
    return res;
}
   
function getSymbol(digit) {
    return "" + codingString[digit]; 
}
