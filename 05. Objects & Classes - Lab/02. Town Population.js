function createTownRegistry(input) {

    let cities = [];

    for (let index = 0; index < input.length; index++) {

        let currentCity = input[index].split(' <-> ');

        let city = {
            name: currentCity[0],
            population: Number(currentCity[1]),
        }

        if (cities.find(c => c.name == city.name)) {
            let existinCity = cities.find(c => c.name == city.name);
            existinCity.population += Number(city.population);
            continue;
        }

        cities.push(city);
    }

    cities.forEach(c => console.log(`${c.name} : ${c.population}`));
}

createTownRegistry([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);