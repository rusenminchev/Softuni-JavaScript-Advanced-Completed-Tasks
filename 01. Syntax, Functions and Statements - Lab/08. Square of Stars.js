function drawSquareOfStars(number){

    if (number == null){
number = 5;
    }

    for (let index = 0; index < number; index++) {
        
console.log('* '.repeat(number));

    }
}

drawSquareOfStars();