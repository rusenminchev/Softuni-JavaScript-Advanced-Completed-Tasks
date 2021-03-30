function solve(firstString, secondString){

    let parsedFirst = parseFloat(firstString);
    let parsedSecond = parseFloat(secondString);
 
    let result = 0;

    for (let index = parsedFirst; index <= parsedSecond; index++) {
        
        result += index;
    }

    console.log(result);
}

solve('-8', '20');