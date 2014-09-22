
/*

//A normal function
function functionName(parameters){

    //code to execute;
    //return value;
}


//anonymous function

var functionName = function(parameters){

    //code to execute;
    //return value;
};

functionName(arguments);
*/


//A normal Function
var base = 10;
var height = 20;
var a = triangleArea(base,height);

console.log(a);

function triangleArea(b,h){

    var area = .5*b*h;
    return area;
}


//Anonymous Function
var triangleA = function (b,h){

    var area = .5*b*h;
    return area;
}

var anon = triangleA(base,height);
console.log(anon);