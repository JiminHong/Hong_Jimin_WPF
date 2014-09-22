//Jimin Hong
//9/17/2014
//Web Programming Fundamentals
//Section_00
//Loop Worksheet

//Only ten people can ride this coaster.

var i = prompt ("Up to 10 people can ride this coaster at the same time. How many people want to ride this coaster?");
//set a variable to hold our value

if(i===10){
    console.log(i + " people are on the coaster! Let's go!")
}

while(i==="" || i==="0")
{
    var i = prompt("please enter the number of people");
}

while(i>10){
    var i = prompt ("Up to 10 people can get in this coaster. You entered "+i+". Enter a number less than 11.");
    while(i==="" || i==="0")
    {
        var i = prompt("please enter the number of people");
    }
}


do{
    console.log(i+" people are on the coaster! Can more get on?");
    i++;
}
while(i<10);






