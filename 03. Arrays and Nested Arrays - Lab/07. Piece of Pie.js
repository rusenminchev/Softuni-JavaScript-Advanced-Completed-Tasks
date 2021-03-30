function solve(input, firstEelement, secondElement){

    let startIndex = input.indexOf(firstEelement);
    let endIndex = input.indexOf(secondElement);

    let output = input.slice(startIndex, endIndex + 1);

    console.log(output);
}

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);