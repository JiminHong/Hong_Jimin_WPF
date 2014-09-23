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


//Ask until the user enter a name besides given names.

while (nameOne === girlNames[0] || nameOne === girlNames[1] || nameOne === girlNames[2]){
    var nameOne = prompt ("Please enter a name besides Alisa, Susan, and Kimberly.")
}



if (nameOne === girlNames[0] || nameOne === girlNames[1] || nameOne === girlNames[2]){
    alert("Please enter a name besides Alisa, Susan, and Kimberly.");

    girlNames.push(prompt("Please enter another name."))


}else if(nameOne === ""){

    girlNames.push(prompt("Please enter a name and do not leave a blank."))
}


else{

//Another name!

    girlNames.push(prompt("Actually, I don't think she would like the name ' " + nameOne + " '. Please enter another girl name for your friend."));
}


console.log(girlNames);

