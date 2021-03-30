function sortArrayByTwoCriteria(array) {

    array.sort().sort((a, b) => a.length - b.length);

    console.log(array.join('\n'));
}

sortArrayByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default']
);