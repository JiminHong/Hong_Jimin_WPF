//How many class hours do I have in this month?
//I have only one class in this month
//Prompts!

//How many courses do I have in this month?

var courses = prompt("How many courses do you have in this month?")

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
//parameter r = course, c = classes , h = hour
var totalHours = function (r,c,h){


    //code to execute
    var hours = r*c*h;

    //return value
    return hours;
};

//function name and arguments
var anon = totalHours(courses,classes,hour);
console.log(anon);