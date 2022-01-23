const ar = [-10, 50, -12, 80, 40, 70];
const ar2 = [];  
const perc = 75;  
    
function myForEach (arr, callback) {
    for(i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function myMap(arr, callback) {
    for(i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
    myForEach(arr, (n, i, a) => {
        if (i == 0) {
            console.log(`${perc}% of the ${i + 1}st element of the array [${a}] is: ${n * (perc/100)}`);
        }
        else if(i == 1) {
            console.log(`${perc}% of the ${i + 1}nd element of the array [${a}] is: ${n * (perc/100)}`);
        }
        else if(i == 2) {
            console.log(`${perc}% of the ${i + 1}rd element of the array [${a}] is: ${n * (perc/100)}`);
        }
        else {
            console.log(`${perc}% of the ${i + 1}th element of the array [${a}] is: ${n * (perc/100)}`);
        }
    })
    console.log(`The resulting new array is ~*~<[${ar2}]>~*~`);
}

myMap(ar, (n, i, a) => {ar2[i] = n * (perc/100)});