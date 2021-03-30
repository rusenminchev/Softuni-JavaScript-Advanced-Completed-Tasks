function printEveryNElement(array, iterationStep) {

    let result = [];
    for (let index = 0; index < array.length; index += iterationStep) {

        result.push(array[index]);
    }

    return result;
}

printEveryNElement(['dsa',
    'asd',
    'test',
    'tset'],
    2);