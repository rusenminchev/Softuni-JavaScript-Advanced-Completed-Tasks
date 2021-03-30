function addOrRemoveElement(commandsArray) {

    let result = [];
    let counter = 1;

    commandsArray.forEach(command => {

        if (command == "add") {
            result.push(counter);

        }
        else if (command == "remove") {
            result.pop();
        }

        counter++;

    });

    if (result.length == 0) {
        console.log('Empty');
    }

    console.log(result.join('\n'));

}

addOrRemoveElement(['add',
    'add',
    'remove',
    'add',
    'add']
);