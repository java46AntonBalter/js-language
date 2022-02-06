
 function createAddress (city, street) {
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address}
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya",  createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara",  createAddress("Lod", "Sokolov"))
] 

function groupBy(array, keyExtractor, groupInitializer, groupReducer) {
    return array.reduce(
        (rv, n) => {
            let key = keyExtractor(n);
            if (rv[key] === undefined) {
                rv[key] = groupInitializer();
            }
            rv[key] = groupReducer(rv[key], n);
            return rv;
        },
        {}
    )
}

let r=groupBy(persons, p=>p.address.city, ()=>0, (rv,p)=>++rv);
console.log(r);

r = groupBy(persons, p=>p.address.city, () => [], (rv,p) => (rv.push(p.name), rv));
console.log(r);
// // -------------------------------
// Write a functinon groupBy(array, .......), which has 
// some callback parameters and performs the following actions
// 1) breaks the array elements into groups by specified criteria
// 2) for each group performs specified reduction operation
// The same function would be able to show the following information 
// when called with different callback parameters:
// Example 1: { Rehovot: 2, 'Tel-Aviv': 1, Lod: 1 }
// Example 2: { 
//    Rehovot: [ 'Vasya', 'Olya' ],
//    'Tel-Aviv': [ 'Tolya' ],
//    Lod: [ 'Sara' ]
// }
//
// Your tasks are:
// - Decide which parameters must have such function
// - Implement the function
// - Implement the calls of this function implementing results of Example 1 and Example 2
//------------------------------------