function findDiagonalSumsOfMatrix(matrix) {

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {

        mainDiagonalSum += matrix[row][row];
    }

    let col = 0;

    for (let row = matrix.length - 1; row >= 0; row--) {

        secondaryDiagonalSum += matrix[row][col];
        col++;
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

findDiagonalSumsOfMatrix([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);