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

var min = 0;
var max = 3;


var riceOneSecond = Math.round(Math.random()*(Number(max)-Number(min))+Number(min));

console.log(riceOneSecond);



console.log(days);



/*



totalRice
*/