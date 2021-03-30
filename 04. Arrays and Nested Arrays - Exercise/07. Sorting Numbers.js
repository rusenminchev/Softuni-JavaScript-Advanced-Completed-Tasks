function sortNumbers(array) {

    let sortedNumbers = [];

    array.sort((a, b) => a - b);

    while (array.length) {
        sortedNumbers.push(array.shift());

        if (array.length == 0) {
            break;
        }

        sortedNumbers.push(array.pop());
    }
    return sortedNumbers;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, - 4]);