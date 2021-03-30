function createObject(cityName, population, treasury) {
//factory function

    let city = {
        name: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percentage) {
            this.population *= (percentage + 100) / 100;
        },

        applyRecession(percentage){
            this.treasury *= (100 - percentage) / 100;
        }
    }

    return city;
}

let city = createObject(
    'Tortuga',
    7000,
    15000
);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

city.applyRecession(10);
console.log(city.treasury);
