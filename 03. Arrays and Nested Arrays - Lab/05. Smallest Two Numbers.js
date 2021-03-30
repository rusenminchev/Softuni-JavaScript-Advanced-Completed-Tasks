function findSmallestTwoElements(input) {

    let twoSmallestElements = input
        .sort((a, b) => a - b)
        .slice(0, 2);

    console.log(twoSmallestElements.join(' '));

}

findSmallestTwoElements([3, 0, 10, 4, 7, 3]);