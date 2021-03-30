function listOfNames(array) {

    let result = array
        .sort()
        .map((x, i) => i + 1 + '.' + x);

    console.log(result.join('\n'));

}

listOfNames(["John", "Bob", "Christina", "Ema"]);