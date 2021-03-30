function calorieObject(inputArray){

let productObjects = [];
let indexer = 0;


    for (let index = 0; index < inputArray.length; index += 2) {
        
        let food = {
            name: inputArray[index],
            calories: inputArray[index + 1],
        }

        productObjects.push(food);
    }

    console.log(productObjects);
}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);