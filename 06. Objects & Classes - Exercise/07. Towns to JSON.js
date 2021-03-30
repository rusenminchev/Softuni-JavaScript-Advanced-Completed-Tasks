function townsToJSON(input) {

    let cities = [];

    let columns = input.shift()
        .split('|')
        .filter(t => t != '')
        .map(x => x.trim());

    input.forEach(townArgs => {
        let townString = columns[0];
        let latString = columns[1];
        let longString = columns[2];

        let city = {};

        let [town, lat, long] = townArgs.split('|')
            .filter(t => t != '')
            .map(x => x.trim());

        city[townString] = town;
        city[latString] = Number(Number(lat).toFixed(2));
        city[longString] = Number(Number(long).toFixed(2));

        cities.push(city);
    });

    let myJSON = JSON.stringify(cities);

    return myJSON;
}

townsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
)