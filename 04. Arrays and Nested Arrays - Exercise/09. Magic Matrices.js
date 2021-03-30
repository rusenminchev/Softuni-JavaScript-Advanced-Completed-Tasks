function isItMagicMatrixOrNot(matrix) {

    let matrixMagicSum = matrix[0].reduce((acc, element) => acc + element);

    let matrixIsMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((acc, element) => acc + element);

        if (rowSum != matrixMagicSum) {
            matrixIsMagic = false;
            break;
        }

        let colSum = 0;

        for (let col = 0; col < matrix[row].length; col++) {

            colSum += matrix[row][col];
        }

        if (colSum != matrixMagicSum) {
            matrixIsMagic = false;
            break;
        }
    }

    return matrixIsMagic;
}

isItMagicMatrixOrNot(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);