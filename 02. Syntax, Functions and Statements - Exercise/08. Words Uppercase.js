function makeWordUppercase(input){

    input = input.toUpperCase();
    
    input = input.replace('.', ' ');
    input = input.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
 
    input = input.split(' ');

    cleanArray = input.filter(function () { return true });

    console.log(cleanArray.join(', '));
}

makeWordUppercase('Functions in JS can be nested, i.e. hold other functions');