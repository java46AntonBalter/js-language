function mapper (n, i, a) {
    return `<li>${i + 1} of ${a.length} - ${n}</li>`    
}
function mapper2(n) {
     return n + 10;
}
function someFunction() {
     const ar = [-10, 50, -12, 80, 90];
     const ar3 = myMap(mapper);
//console.log(ar3);

}
const ar = [-10, 50, -12, 80, 40];
ar.push(70);
// str - "-10#50#-12#80#40#70"
/*********solution based on substring */
// let str = '';
// ar.forEach(function(n) {
//         str += n + '#';
// })
// str = str.substring(0, str.length - 1);
/*************************solution based on forEach form second number */
// const ar1 = ar.slice(1);
// let str =  '' + ar[0];
// ar1.forEach(n => str += '#' + n);
// console.log(str);
/*****************************printing out sequense number of element, element, length of arry */
// 1 of 5 - -10;    ....
//ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));

// method "map"
//use case of applying method map : you want to create new array with elements that are received as result of some conversion
//example you want to get new array with elements that are muliplication on 2 of each source element
// const ar2 = ar.map(n => n * 2);
// console.log(ar2);
// someFunction();
/*****************HW 13 task1 definition */
// write function myForEach(array, callback-function);
//array  - being iterated array
//callback-function - function that will be called for each element of array
//callback-function should take three arguments: current elemnt, current index, being iterated array
//example of standard forEach : array.forEach(n => str += '#' + n);
//example of myForEach : myForEach(array, n => str += '#' + n);

/********************************************************************* */
/**********************************************HW 13 definition task2 */
//write method myMap  for the same functionality as standard method map
//function myMap(array, callback-function)
//myMap will apply your method myForEach
//array  - being iterated array
//callback-function - function that will be called for each element of array
//callback-function should take three arguments: current elemnt, current index, being iterated array
//example of standard map : map(n => n * 2);
//example of myMap : myMap(array, n => n * 2);

/******************************Solution HW 13*/
function myForEach(array, callback) {
     for (let i = 0; i < array.length; i++) {
             callback(array[i], i, array);
     }
}
function myMap(array, callback) {
     const res = [];
     function forEachCall(n, i, a) {
             res.push(callback(n, i, a));
     }
     myForEach(array, forEachCall);
     return res;
}
// const ar10 = [-10, 50, -12, 80, 40];
// myForEach(ar10, n => console.log(n));
// const ar4 = myMap(ar, mapper2)
// console.log(ar4);
/***********************************************************cw 14 */
//const ar20 = [13, 17, 20, 23, 2, 40];
// const arEvenOdd = ar20.filter((n, _i, a) => a.length % 2 == 0 ?
//  n % 2 == 0 : n % 2 == 1);
// console.log(arEvenOdd);
/******************************************HW 14 definition task1 */
//TODO write myFilter(array, callback) based on myForEach
//callback - function with three possible parameters: current element, current index, reference to array
/********************************************************************* */
// let res = ar20.reduce((res, cur) => res + cur, 0);
// console.log(res)
// const max = ar20.reduce((max, cur)=>cur > max ? cur : max, ar20[0]);
// console.log(max);
// console.log(res);
// // reduce with no second argument
// res = ar20.reduce((res, cur) => res + cur);
/******************************************HW 14 definition task1 */
//TODO write myReduce(array, callback, initialResult) based on myForEach
//callback - function with four  possible parameters: accumulated result,
// current element, current index, reference to array
// if the user call doesn't contain initialResult, then the first element of the array will be
//considered as initial result (in that case iterating begins from the second element of the array)
/********************************************************************* */
/**********************************************************HW 14 Solutions */
function myFilter(array, callbackPredicate) {
     const res = [];
    //  function forEachCallback(n, i, a) {
    //          if (callbackPredicate(n, i, a)) {
    //                  res.push(n);
    //          }
    // }
    myForEach(array, (n, i, a) => callbackPredicate(n, i, a) && res.push(n));
    return res;
}
const ar20 = [13, 17, 20, 23, 2, 40,50];
const arEvenOdd = myFilter(ar20,(n, _i, a) => a.length % 2 == 0 ?
n % 2 == 0 : n % 2 == 1);
console.log(arEvenOdd);
function myReduce(array, callbackReduce, initial) {
     
    if (initial === undefined) {
            initial = array[0];
            array = array.slice(1);
    }
    let res = initial;
    //  function forEachCallback(n, i, a) {
    //           res = callbackReduce(res,n,i,a );       
    //  }
     myForEach(array,(n, i, a) => res = callbackReduce(res, n, i, a));
     return res;
}
let res = myReduce(ar20, (res, cur) => res + cur, 0);
console.log(res)
let max = myReduce(ar20,(max, cur)=>cur > max ? cur : max, ar20[0]);
console.log(max);

// reduce with no second argument
res = myReduce(ar20,(res, cur) => res + cur);
max = myReduce(ar20,(max, cur)=>cur > max ? cur : max);
console.log(res);
console.log(max);