var username = prompt ("what is your username?");

var password = prompt ("what is your password?");

actualUsername = "abc";
actualPassword = "123";

if (username === actualUsername && password === actualPassword ){
    console.log ("welcome");
}else if (username === actualUsername && password != actualPassword){
    console.log ("password Wrong!");
}else if (username != actualUsername && password === actualPassword){
    console.log ("Username Wrong!");
}else {
    console.log ("you need to make an account");
}