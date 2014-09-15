var age = prompt ("How old are you?");

var time = prompt ("What time do you want to watch the movie?");


var gender = prompt ("Are you male or female?");


if (age <= 10 || age >= 50){
    console.log ("Your ticket price is $7.00");
}

else if (3 <= time && time <= 5){
    console.log ("Your ticket price is $7.00");
}

else if (gender === "female"){
    console.log ("Your ticket price is $7.00");
}

else {
    console.log ("Your ticket price is $12.00");
}