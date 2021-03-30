function firstLastElementSum(input){

let sum = 0;
sum += Number(input[0]);
sum += Number(input[input.length - 1]);

console.log(sum);
}

firstLastElementSum(['20', '30', '40']);