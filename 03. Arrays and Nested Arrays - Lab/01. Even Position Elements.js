function findEvenPositionElements(input){

let evenPositionElements = input.filter((x, i) => i % 2 == 0)

console.log(evenPositionElements.join(' '));

}

findEvenPositionElements(['5', '10']);