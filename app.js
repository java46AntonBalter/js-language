/*****************Arrays */
const ar = [-10, 50, -12, 80, 40, 70];

const ar2 = myFilter(ar, (n, i ,a) => {
    if(i % 2 != 0 && n > a.length) {
        return n;
    }
});
console.log(ar2);
let ar3 = ar.filter((n, i ,a) => {
    if(i % 2 != 0 && n > a.length) {
        return n;
    }
});
console.log(ar3)


const ar4 = myReduce(ar, (r, n, i, a) => r + n, 0);
console.log(ar4);

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
function myFilter(array,callback) {
    const res = [];
    myForEach(array, (n, i, a) => callback(n, i, a) && res.push(n));
    return res;
}
function myReduce(array, callback, initialResult){
    if (initialResult === undefined) {
        initial = array[0];
        array = array.slice(1);
    }
    let res = initialResult;
    myForEach(array,(n, i, a) => res = callback(res, n, i, a));
    return res;
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
    createPerson(126, "Sarah", createAddress("Lod", "Sokolov"))
]


const res = persons.filter(n => n.address.city == "Rehovot");
console.log(`
People living in Rehovot are:`);
console.log(res);
console.log(`
Sorting:`);
persons.sort((a, b) => a.address.city != "Rehovot"? -1 : 1);
console.log(persons);

/*****************Extra 1 ******/
let res3 = persons.filter(n => n.address.city == "Rehovot").reduce((rv,p) => (rv.id > p.id)? rv.name : p.name);
console.log(res3);

/**********Extra 2 */
const res4 = persons.map(n => n.address.city).reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
console.log(res4);
