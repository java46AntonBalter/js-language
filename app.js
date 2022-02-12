function getRandomNumber(min, max) {

       let res = (min > max)? ([min, max] = [max, min]) && (Math.floor(Math.random() * (max - min + 1) ) + min) : (Math.floor(Math.random() * (max - min + 1) ) + min);  
       return res;

//TODO
//min -minimal value
//max - max value
//Example getRandomNumber(0, 1) -> returns number that is either 0 or 1
//if min > max then you should swap values
//swap should be without additional variable in one line code
}
res = getRandomNumber(9, 0);
console.log(res);
function concatinate(prefix) {
        const res = '' + prefix;
        return function (m) {return res + m};
//TODO
// that by using the following code
// const concatApp = concatinate('App - ');
// const concatMessage = concatApp('Test status: Done');
// console.log(concatMessage);
// there should be displayed out App - Test status: Done;
}
setTimeout(concatinate);
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);