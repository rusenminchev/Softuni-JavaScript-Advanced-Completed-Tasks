function findGCD (firstNumber, secondNumber){

   let greatestGCD = 0; 

   for (let index = 0; index < firstNumber; index++) {
       
       if(firstNumber % index == 0 && secondNumber % index == 0)
       {
        greatestGCD = index;
       }
   }

   console.log(greatestGCD);
}

findGCD(2154, 458);