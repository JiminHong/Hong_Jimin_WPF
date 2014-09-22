/**
 * Created by jiminhong on 9/19/14.
 */

function printHello(){

    console.log("Hello World!!!");
}

function printMore(){

    console.log("Prints out more text");
}

printHello();
printMore();


calcArea();
//variable scope
//var width = 20;
//var height = 10;


//안에다가 console.log 하려면, function 안에다가 variable 만들어야해! 그리고 console.log해야해!

function calcArea(){

    var width = 30;
    var height = 10;
    var area = width * height;

    console.log(area);
}



calcArea();
calcArea();