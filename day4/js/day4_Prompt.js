/**
 * Created by jiminhong on 9/10/14.
 */




var name = prompt("What is your name?");

console.log(name);
alert(name);

//calculate the area of rectangle

//variable set for the width of a room. prompt user for the width
var width = prompt("what is the width of your room");

var height = prompt("what is the height of your room");

var area = width*height;

var subtractRoom = width-height;

var addRoom = Number(width)+Number(height); //Casting

//parseInt

console.log(area);
console.log(subtractRoom);
console.log(addRoom); //Casting
alert(area);


var areaCode = prompt("what is your area code?");
var phoneNumber = prompt("what is your phone number?");

var info = String(areaCode) + String(phoneNumber); //Casting

console.log(areaCode);
console.log(phoneNumber);
console.log(info); //Casting