function calculateCircleArea(arg){
  
let result = null;
if(typeof(arg) === "number"){  
   result = (Math.PI * (Math.pow(arg,2))).toFixed(2);  
}
else{
    result = `We can not calculate the circle area, because we receive a ${typeof(arg)}.`;
    } 

    console.log(result);
}

calculateCircleArea(5);