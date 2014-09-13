//Basic Conditional

/*
var oldEnough = true;
//if the child is old enough, they can ride!

if(oldEnough){
    //if oldEnough is true, then you can ride!
    //if oldEnough is false, then nothing happens!
    console.log("You can ride the coaster!");
}
*/

/*
var oldEnough = false;

//if the child is old enough, they can ride!

if(oldEnough){
    //if oldEnough is true, then you can ride!
    //if oldEnough is false, then nothing happens!
    console.log("You can ride the coaster!");
};
*/






//Relational Expressions
//if the kid is tall enough, then they can ride.
//must be 48 inches tall or over.

/*
var kidHeight = 40;
//Kid's height
var minHeight = 48;
//minimum height to ride the coaster

if(kidHeight >= minHeight){
    //if the kid is taller than or equal to the minimum height they can ride the coaster.
    console.log("You can ride the coaster!")
}
*/

/*
var kidHeight = 50;
//Kid's height
var minHeight = 48;
//minimum height to ride the coaster

if(kidHeight >= minHeight){
    //if the kid is taller than or equal to the minimum height they can ride the coaster.
    console.log("You can ride the coaster!")
};
*/









//Conditional with an expressions

/*
//set the kid's height
var kidHeight = 46;

//minimum height
var minHeight = 48;

//sneaker lift
var sneakerLift = 2;

//tall enough to ride with or without shoes?

//if kid is taller than minimum height with shoes, then can ride?
if(kidHeight+sneakerLift >= minHeight){

    //if kid is tall enough with the shoes on, they can ride
    console.log("You are tall enough with shoes on!")
}

*/






//If Else Statement
//Choosing between two blocks of code

/*
var kidHeight = 47;
//kid Height
var minHeight = 48;
//minimum height to ride

if(kidHeight >= minHeight){

    //if true then they can ride
    console.log("You can ride!");
}else{
    //if false (You are too short!), then you cannot ride!
    console.log("You cannot ride! :( You are to short!")
}
*/






//Else if - choosing between 3 or More blocks of code

var kidHeight = 45;
var minHeight = 48;
//Kid height to ride with a parent
var wParentHeight = 44;

//if taller than the min height, you can ride
//if shorter than the min height but with parent and meet the height
//requirement, you can ride
//you are too short you can't ride

if(kidHeight >= minHeight){

    console.log("You can ride!")
}else if(kidHeight <= wParentHeight){

    //with parent
    console.log("You can ride with your parent!");
}else{
    console.log("Go home!");
}
































