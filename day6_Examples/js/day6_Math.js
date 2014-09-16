//validating prompts

//minimum & maximum variable
var min = prompt ("please enter a minimum number");
var max = prompt ("please enter a maximum number");

//test to see that a number was actually entered!

if (min==="")//nothing이라는 말임. 그냥 " " 이렇게하면 space를 뜯하는 것임. we're looking for nothing not something. space is something.
{
    console.log("You did not enter the number!");
    min = prompt ("PLEASE enter a minimum number");
}

//isNAN = it is not a number
if(isNaN(min) || min===""){
    min = prompt ("PLEASE enter a number and do not leave blank");
}


var randomNumber = Math.round(Math.random()*(Number(max)-Number(min))+Number(min));

console.log(randomNumber);


var num1 = 9.555;
console.log(num1);
console.log(Math.round(num1));
//rounding num1

console.log(Math.ceil(num1));
//round num1 up (무조건 반'올림')

console.log(Math.floor(num1));
//round numb1 down

var num2 = Math.random();
console.log(num2); //find random number between 0 and 1

var num3 = Math.random()*10; // find random number between 0 and 10
console.log(num3);


