//Jimin Hong
//9/17/2014
//Web Programming Fundamentals
//Section_00
//Loop Worksheet

//while at least 3 student register for a class, the class should be open.
//If there are less than 3 student who registered for a class, the class can be canceled.

var i = prompt("how many people registered for this class?");

while (i==="" || i==="0"){
    var i = prompt ("please enter a number and do not leave the blank.")
}


while( i>3 && i < 31){

    console.log("Music History class is not canceled. "+i+" student registered this class.");
    i++; //counts until condition is false

}
if (i<3) {
    console.log("This class got canceled. Only "+i+ " student(s) registered this class.");
}else if (i>=31){
    console.log("This class is full. "+i+ " student registered this class.")
}else{
    console.log("Only " +i+ " registered! Just made it!");
}
