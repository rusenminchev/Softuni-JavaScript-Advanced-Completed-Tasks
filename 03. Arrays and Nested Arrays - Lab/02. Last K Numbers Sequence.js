function solve(...input){

    let arrayLength = input[0];
    let kNumber = input[1];
    
    let array = [];
    for (let index = 0; index < arrayLength; index++) {

        if(index == 0) {
            array.push(1);
        }
        else {

            let kNumberSum = 0;

            if(index <= kNumber) {
                kNumberSum = array
                .reduce((acc, x) => acc + x);
            }
            else {

               kNumberSum = array
               .slice(index - kNumber, index)
               .reduce((acc, x) => acc + x);
            }
    
            array.push(kNumberSum);
        }
    }

    console.log(array.join(' '));
}

solve(6, 3);