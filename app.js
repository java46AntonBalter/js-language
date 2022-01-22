function mapper (n, i, a) {
    return `<li>${i + 1} of ${a.length} - ${n}</li>`    
}
function someFunction() {
     const ar = [-10, 50, -12, 80, 90];
     const ar3 = ar.map(mapper);
console.log(ar3);

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
ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));

// method "map"
//use case of applying method map : you want to create new array with elements that are received as result of some conversion
//example you want to get new array with elements that are muliplication on 2 of each source element
const ar2 = ar.map(n => n * 2);
console.log(ar2);
someFunction();
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

