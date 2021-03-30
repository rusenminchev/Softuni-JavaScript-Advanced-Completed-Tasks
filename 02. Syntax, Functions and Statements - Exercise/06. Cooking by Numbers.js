function coockingByNumbers(...inputArray){

    let number = parseFloat(inputArray[0]);

for (let index = 1; index < inputArray.length; index++) {

    let command = inputArray[index];

    if(command == 'chop'){
        number /= 2;
    }
    else if(command == 'dice'){
        number = Math.sqrt(number);
    }
    else if(command == 'spice'){
        number++;
    }
    else if(command == 'bake'){
        number *= 3;
    }
    else if(command == 'fillet'){
        number *= 0.80;
    }

    console.log(number);
}
}

coockingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');