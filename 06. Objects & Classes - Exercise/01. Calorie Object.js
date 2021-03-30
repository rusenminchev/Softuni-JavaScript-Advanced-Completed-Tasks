function solve(input) {

    for (let index = 0; index < input.length; index += 2) {
        let food = {
            name: input[index],
            calories: input[index + 1],
        }
    
        console.log(food);
    }  
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);