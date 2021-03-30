function aggregateElements (input){

    let sumOfTheElements = 0;
    let concatenatedResult='';

input.forEach(element => {
    sumOfTheElements += element;
    let elementToString = element.toString();
    concatenatedResult += elementToString
});

let sumOfTheInverseValue = 0;

for (let i = 0; i < input.length; i++) {
    sumOfTheInverseValue += 1 / input[i];
}
    
console.log(sumOfTheElements);
console.log(sumOfTheInverseValue);
console.log(concatenatedResult);

console.log(input.join(''));
}

aggregateElements([2, 4, 8, 16]);