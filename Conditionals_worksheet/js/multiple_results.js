//Jimin Hong
//9/12/2014
//Web Programming Fundamentals
//Section_00
//Conditionals worksheet
//Multiple Results

//ASKing username and password
var usernameByUser = prompt("What is your username?");
var passwordByUser = prompt("What is your password?");

//Given username and password
var username = "ABC";
var password = "123";



// when username and password are matched.
if(usernameByUser === username && passwordByUser === password){
    console.log("welcome, "+username+"!");
}

//When your user name does not match.
else if (usernameByUser != username && passwordByUser === password){
    console.log("User not found. Try again.");
}

//Password doesn't match our records.
else{
    console.log("Password does not match our records.");
}
