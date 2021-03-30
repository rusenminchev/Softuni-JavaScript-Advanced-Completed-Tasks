function solve(input) {

    let sortedInput = input.sort();

    let catalogue = {};

    while (input.length) {
        let product = input.shift();

        let [productName, productPrice] = product.split(' : ');

        let firstLetter = productName[0];

        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = [];
        }

            catalogue[firstLetter].push({ productName, productPrice });
    }

    let result = [];

    for (const group in catalogue) {
        let values = catalogue[group].map(entry => `  ${entry.productName}: ${entry.productPrice}`);
        let string = `${group}\n${values.join('\n')}`;
        result.push(string);
    }

    return result.join('\n');
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));