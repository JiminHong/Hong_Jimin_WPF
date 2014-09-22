//Arguments & Parameters(한도)
//Arguments - goes into function
//Parameters - catches the arguments in the function

//Allows us to make our code more flexible!


var width = 10;
var height = 10;
//call the function and pass in arguments
calcArea(width,height);


//Create function and pass arguments into parameters
function calcArea(w,h){

    var area = w*h;
    console.log(area);

    return area;
}

var funcResult = calcArea(10,30);
//run the function again
console.log(funcResult);

//call the function
//Instead of declaring the variables of w and h in the function,
// I can declare variables like this. RUN THE FUNCTION AGAIN
calcArea(20,8);




function calYears(dogYears,timesNumber){

    var humanYears = dogYears * timesNumber;
    console.log(humanYears)
}

calYears(2,7);


