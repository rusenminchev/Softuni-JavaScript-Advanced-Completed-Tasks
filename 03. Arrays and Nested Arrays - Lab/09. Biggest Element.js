function findBiggestElementInMatrix(input){

    let concatenatedInput = [];

    for (let index = 0; index < input.length; index++){
        concatenatedInput = concatenatedInput.concat(input[index]);
    }

    let biggerElementInAMatix = Math.max(...concatenatedInput);

    console.log(biggerElementInAMatix);
}

findBiggestElementInMatrix([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]   
   );