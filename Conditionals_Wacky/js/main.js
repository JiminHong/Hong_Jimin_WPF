//Jimin Hong
//9/15/2014
//Web Programming Fundamentals
//Section_00
//Conditionals worksheet
//Conditionals

// You are in jail.
// You have to make roses with rice.
// only when the guard was not looking at you, you can eat rice.
// You can eat maximum 3 rice in one second.
// Normally the guard does not look at you for around 1 minute every day.
// Find rough average amount of rice you can eat today.


var days = prompt ("how many days are you gonna try to eat rice when the guard is not looking at you?");

console.log("you will try to eat rice for "+days+" days.");


var minRice = 0;
var maxRice = 3;

var riceOneSecond = Math.round(Math.random()*(Number(maxRice)-Number(minRice))+Number(minRice));

console.log("You will roughly have "+riceOneSecond+" in one second.");

//Assume how long the guard will not look at you
var minTime = 0;
var maxTime = 60;

var time = Math.round(Math.random()* (Number(maxTime)-Number(minTime))+Number(minTime));

console.log("your guard will see you for "+time+" seconds.");




console.log("I assume you can have total "+totalRice+" rice today.")
