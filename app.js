/************ HW #12 ********/
/**** Comparator ****/
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort((a, b) => (a % 2) - (b % 2));
arHw.sort(function(a,b){
    if((a % 2 == 0) && (b % 2 == 0)){
        return a-b;
    }
    else if((a % 2 != 0) && (b % 2 != 0)){
        return b-a;
    }
})
console.log(arHw.toString());
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
            newMatrix[j].splice(200, 0, matrix[i][j])
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