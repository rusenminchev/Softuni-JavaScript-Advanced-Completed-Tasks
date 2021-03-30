function sortNumbers(input) {

    negativeValues = input.filter((x) => x < 0).sort((a, b) => b - a);
    positiveValues = input.filter((x) => x > 0).sort((a, b) => a - b);
    zeroValues = input.filter((x) => x == 0);

    sortedArray = negativeValues.concat(positiveValues, zeroValues);

    console.log(sortedArray);
}

sortNumbers([3, -2, 0, -1]);