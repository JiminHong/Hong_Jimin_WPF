// My friend has got a baby girl.
// I need to make her name.
//
//
//Girl Names what I have so far
var girlNames = ["Alisa","Susan","Kimberly"];

//Please enter another girl name
alert("You have to make a girl name for your friend. We have Alisa, Susan and Kimberly so far.")

//Adding a name you recommend.
var nameOne = prompt("Can you recommend a girl name besides what I said before? Please enter a name.");


if (nameOne === girlNames[0] || nameOne === "alisa"|| nameOne === girlNames[1] || nameOne === "susan" || nameOne === girlNames[2] || nameOne === "kimberly"){
    alert("Please enter a name besides Alisa, Susan, and Kimberly.");
}

//Another name!
girlNames.push = prompt("Actually, I don't think she would like the name ' "+nameOne+" '. Please enter another girl name for your friend.");

console.log(girlNames);





