function getSecondHalfOfAnArray(input){

input = input.sort((a,b) => a - b);

let secondHalf = input.slice(input.length / 2, input.length);

console.log(secondHalf);
}

getSecondHalfOfAnArray([3, 19, 14, 7, 2, 19, 6]);