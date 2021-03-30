function createObject(cityName, population, treasury) {

    let city = {
        name: cityName,
        population: population,
        treasury: treasury,
    }

    return city;
}

createObject(
    'Tortuga',
    7000,
    15000
);