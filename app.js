
function reducer(array){
    const result = array.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
    return result;
}
function displayOccurrences(array) {
    const res = reducer(array);      
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
}
const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurrences(ar);

function countBy(array, callbackFun) {
    const resArr = array.map(callbackFun); 
    const res = reducer(resArr);
    return res;  
}
// const arr = [6.4, 7.3, 6.5, 6.9];
// const statistics = countBy(arr, n => Math.floor(n));
// console.log(statistics);

// const arr = ['abcd', 'lmnr', 'ab', 'dddd'];
// const statistics = countBy(arr, n => n.length)
// console.log(statistics);

const arr = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
{age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}]
const statistics = countBy(arr, n => n.age)
console.log(statistics);


