//Jimin Hong
//9/17/2014
//Web Programming Fundamentals
//Section_00
//Loop Worksheet

//I was nominated by Kali to post 3 positive things for the next 7 days and then nominate 2 others each day to do the same.

//I am going to accept this challenge and I assume every body who is nominated by someone will do this challenge.

//On 7th day, how many people would do this challenge?

var numPeople = 1;// initial person
var numNominate = 2; // two people
var days = 7; //total number of days

for(var i=1; i<=days; i++) {

    var newPeople = numPeople * numNominate;
    var numPeople = newPeople + numPeople;

    console.log(numPeople + " people are doing 3 positive things challenge on day #" + i);
}

