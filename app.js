/*****************Arrays */
const ar = [-10, 50, -12, 80, 40, 70];

const ar2 = myFilter(ar, (n, i ,a) => i % 2 == 0 ? n + a.length: n - a.length);
console.log(ar2);


const ar3 = myReduce(ar, (n, i, a) => (n >= i) && (n >= a.length) ? n : 0, 0);
console.log(ar3);
const ar4 = myReduce(ar, (n, i, a) => (n >= i) && (n >= a.length) ? n : 0);
console.log(ar4);

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
    if(initialResult != undefined){
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

/******************Objects */
function createAddress(city, street) {
    return {city: city, street: street};
}
function createPerson(id, name, address) {
    return{id, name, address};

}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr. Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
]


const res = persons.filter(n => n.address.city == "Rehovot");
console.log(`
People living in Rehovot are:`);
console.log(res);
console.log(`
Sorting:`);
persons.sort((a, b) => a.address.city != "Rehovot"? -1 : 1);
console.log(persons);

