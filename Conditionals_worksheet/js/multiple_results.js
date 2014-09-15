//Jimin Hong
//9/12/2014
//Web Programming Fundamentals
//Section_00
//Conditionals worksheet
//Multiple Results

//Asking username
var usernameByUser = prompt("What is your username?");
//Asking password
var passwordByUser = prompt("What is your password?");

//Given username
var username = "ABC";
//Given password
var password = "123";



// when username and password are matched.
if(usernameByUser === username && passwordByUser === password){
    //when user name and password are matched.
    console.log("welcome, "+username+"!");
}

//When your user name does not match.
else if (usernameByUser != username && passwordByUser === password){
    //when your username is not correct
    console.log("User not found. Try again.");
}

//Password doesn't match our records.
else if (usernameByUser === username && passwordByUser != password){
    //when your password is not correct.
    console.log("Password does not match our records.");
}

else {
    console.log ("you need to make a new account");
}