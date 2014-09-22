//Basic For Loop
// for (initialization, condition, increment of change)

//Zombie Madness!!
//We have a zombie here at school.
//It can bite 4 people a day and turn them into zombies
//The CDC wants to know how many zombies there will be in 8 days?

var numZombies = 1; // initial number of zombies
var numBites = 4; // number of bites per zombie per day
var days = 8; // total number of days

//i is number of days
for(var i=1; i<=days; i++){

    var newZombies = numZombies * numBites; //start with original Zombies times bites
    numZombies = numZombies + newZombies; //number of zombies is original zombie + new zombies

    console.log("there are "+numZombies+" zombies on day # "+i+"!");

}


