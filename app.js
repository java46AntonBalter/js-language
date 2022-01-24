const ar = [-10, 50, -12, 80, 40, 70];

const ar2 = myFilter(ar, (n, i ,a) => i % 2 == 0 ? n + a.length: n - a.length);
console.log(ar2);

const ar3 = myReduce(ar, (n, i, a) => (n >= i) && (n >= a.length) ? n : 0);
console.log(ar3);
const ar4 = myReduce(ar, (n, i, a) => (n >= i) && (n >= a.length) ? n : 0, 0);
console.log(ar3);

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
function myFilter(array,callback) {
    const res = [];
    function forEachCall(n, i, a) {
        res.push(callback(n, i, a));
    }
    myForEach(array, forEachCall);
    return res;
}
function myReduce(array, callback, initialResult){
    if(initialResult !== undefined){
        let res = initialResult;
        function forEachCall(n, i, a) {
            res = res + callback(n, i, a);
        }
        myForEach(array, forEachCall);
        return res;
    }
    else{
        let res = array[0];
        array.splice(0, 1);
        function forEachCall(n, i, a) {
            res = res + callback(n, i, a);
        }
        myForEach(array, forEachCall);
        return res;
    }
}