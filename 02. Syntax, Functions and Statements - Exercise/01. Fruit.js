function buyFruit(typeOfFruit, weight, pricePerKilo){

let weightInKg= weight / 1000
let moneyNeeded = weightInKg * pricePerKilo;

console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`)
}

buyFruit('apple', 1563, 2.35);