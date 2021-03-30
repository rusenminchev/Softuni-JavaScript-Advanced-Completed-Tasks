function rotateArray(array, numberOfRotations) {

    for (let index = 0; index < numberOfRotations; index++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);