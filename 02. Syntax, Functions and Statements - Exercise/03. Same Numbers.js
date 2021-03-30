function isThatSameNumbers(number){

let numberToString = number.toString();
let areNumbersSame = true;
let sum = 0;

for (let index = 0; index < numberToString.length; index++) {
  let firstNumber = numberToString[0];
  if(firstNumber != numberToString[index])
    {
        areNumbersSame = false;
    }
sum += parseFloat(numberToString[index]);
}

console.log(areNumbersSame);
console.log(sum);

}

isThatSameNumbers(222212321312)