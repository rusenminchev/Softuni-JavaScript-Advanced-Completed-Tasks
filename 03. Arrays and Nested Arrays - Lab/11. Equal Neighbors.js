function findNumberOfEqualNeighbours(matrix) {

    let count = 0;

    for (let mainRow = 1; mainRow < matrix.length - 1; mainRow++) {
        for (let mainCol = 1; mainCol < matrix[mainRow].length - 1 ; mainCol++) {

            let currElement = matrix[mainRow][mainCol];

            if (currElement === matrix[mainRow + 1][mainCol] || currElement === matrix[mainRow - 1][mainCol]
                || currElement === matrix[mainRow][mainCol + 1] || currElement === matrix[mainRow][mainCol - 1]) {

                count++;
            }

        }
    }
    console.log(count);

}


findNumberOfEqualNeighbours([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]
);


// for (let row = 0; row < matrix.length; row++) {

//     for (let col = 0; col < matrix[row].length; col++) {
//         if(currElement == matrix[row][col])
//         {
//             count++;
//         }
//     }
// }