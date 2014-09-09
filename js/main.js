console.log("Hello");

//declaration and assignment;


//review expressions;
//++ adds 1
//-- subtracts 1
//= assignment (this doesn't mean equal anymore.)
//+= increments;
//-= decrements;


//change an existing variable's value;
//score=10;
//using expressions to change variable's value;

//Data Types!!!!!!!
//var score=5; //Number
//var name="bob"; //String //score="10"; // "" 이 표시 있으면 string. Even though you put numbers in the quotation mark.
//var happy=true; //Boolean
//var grades = [80,90,100,90,100,110]; //Array

var score=5;
var firstName="bob";
var lastName="Smith";
var fullName=firstName+" "+lastName; //+양쪽이 number가 아니고 + 기호를 쓰는 것. "concatenation"이라고 부른다.
                                     // concatenate 한다고 말함. You concatenate space.
var happy=true;
var grades = [80,90,100,90,100,110];


//console.log(grades[0]); // array access notation
console.log("name",fullName);


var total = 5+4;
total+=3;
console.log(total); //answer is 543. In this case you are adding 3.

var total = "5"+4;
total+=3;
console.log(total); //answer is 543. In this case you are not adding 3 but concatenating 3.

var total = "a"+"b";
total+="c";
console.log(total);

var total = "a"+"b";
total+=1000;
console.log(total);


var total = 35;
total+=1000;
console.log(total);


//2nd lecture in 3rd day.

var animal = "Dog";
var age = 9;
var fName = "Pippy";
var lName = "Carroll";
var serviceDog = true;
var kennel = ["Fido","Max","Tom"];

console.log(animal+" "+age+" "+fName+" "+lName+" "+serviceDog+" "+kennel[0])