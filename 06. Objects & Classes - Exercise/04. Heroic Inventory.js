function solve(input) {

    let heroes = [];

    input.forEach(hero => {
        //deconstruct an array
        let [name, level, items] = hero.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];

        heroes.push({ name, level, items });

    });

    let heroesToJSON = JSON.stringify(heroes);

    console.log(heroesToJSON);
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)