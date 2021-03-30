function rectangle(width, height, color) {

    function capitalize(color){
        return color[0].toUpperCase() + color.slice(1);
    }

    color = capitalize(color);

    let rect = {
        width: width,
        height: height,
        color: color,
        calcArea(){
           return rect.height * rect.width;
        }
    }

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
