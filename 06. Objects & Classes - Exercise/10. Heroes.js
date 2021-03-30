function solve() {

    let hero = {};

    let create = {

        fighter(name) {
            hero.name = name,
                hero.health = 100,
                hero.stamina = 100,
                hero.fight = () => {
                    hero.stamina--;
                    console.log(`${hero.name} slashes at the foe!`);
                }
            return hero;
        },

        mage(name) {
            hero.name = name,
                hero.health = 100,
                hero.mana = 100,
                hero.cast = (spellName) => {
                    hero.mana--;
                    console.log(`${hero.name} cast ${spellName}`);
                }
            return hero;
        }
    }

    return create;
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
