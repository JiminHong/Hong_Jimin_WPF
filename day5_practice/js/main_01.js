var age = prompt("how old are you?");

var time = prompt ("what time do you wanna watch the movie?");



// you can get discount when you are older than 20 and younger than 30

if(20 <= age && 30 >= age){
    console.log("Your ticket price is $7.00");
}

// you can get discount when you watch movie
else if (10 >= time && time >= 7 || 20 >= time && time >= 15 ){
    console.log("Your ticket price is $7.00");
}


else {
    console.log("Your ticket price is $12.00");
}
