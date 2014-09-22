//How many class hours do I have in this month?
//I have only one class in this month
//Prompts!

//How many classes do I have?
var classes = prompt("How many classes do you have in one course?");


//How many hours do I have to take for one class?
var hour = prompt("How many hours do you have in one class?");

/*
//anonymous function

var functionName = function(parameters){

    //code to execute;
    //return value;
};

functionName(arguments);
*/

//totalHours is a function name.
//parameter c = classes , h = hour
var totalHours = function (c,h){


    //code to execute
    var hours = c*h;

    //return value
    return hours;
}

//fuction name and arguments
var anon = totalHours(classes,hour);
console.log(anon);