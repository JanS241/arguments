// function arguments


const paintwall = function(paintcolor){
    console.log('Paint the wall wih a ' + paintcolor + 'color');
}

paintwall('green'); // geeft paint the waal with a green color

paintwall(); // geeft paint the wall with a undefined color

paintwall('red');

//
const paintwallside = function(paintcolor , location){

    console.log('The '+ location + ' wall has been painted ' + paintcolor)

};

paintwallside('orange','north');

paintwallside('grey','nort-east');

// the order of the arguments is important, may not be changed