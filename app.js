/************ HW #12 ********/
/**** Comparator ****/
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
const arHwsorted = arHw.slice();
arHwsorted.sort(function(a,b){
    if((a % 2 == 0) && (b % 2 == 0)){
        return a-b;
    }
    if((a % 2 != 0) && (b % 2 != 0)){
        return b-a;
    }
    if((a % 2 == 0) && (b % 2 != 0)){
        return -1;
    }
    if((a % 2 != 0) && (b % 2 == 0)){
        return 1;
    }
})
console.log(`Unsorted: [${arHw.toString()}]`);
console.log(`Sorted: [${arHwsorted.toString()}]`);
/******************************************* */

function matrixTransp(matrix){
    const newMatrix = [];
    for (let i = 0; i < 1; i++){
        for (let j = 0; j < matrix[i].length; j++){
            newMatrix.push([]);
        }
    }
    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[j].push(matrix[i][j]);
        }
    }
    console.log(newMatrix);
    displayMatrix(newMatrix);
}

function displayMatrix(matrix){
    for(let i = 0; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < matrix[i].length; j++) {
            row = row + matrix[i][j] + '  ';
        }
        console.log(row);
    }
}
const matrix = [[1, 2], [3, 4], [5, 6]];
console.log(matrix);
displayMatrix(matrix);
matrixTransp(matrix);