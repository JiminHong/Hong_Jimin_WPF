//Jimin Hong
//9/15/2014
//Web Programming Fundamentals
//Section_00
//Conditionals worsheet
//Conditionals




//I am planning for a trip to Japan and I want to get souvenirs as many as possible.
// However, because of budget I have to pick how many souvenir I will get.
// I want to get souvenirs at least for my family.

//how many family member do you have?

var min = prompt("How many family members do you have?");

var max = prompt("How many friends do you have?");



//your random price of a gift you can get for your people is.
//You can get - of gifts

//when you did not put any number.
if (max==="" || max==="0")
{
    console.log("please enter the number of your cousins");

    max = prompt ("You don't have friend? That is okay. Please enter the number of your cousins ");
}

// find random number of gift I need to get.
var randomNumber = Math.round(Math.random()*((Number(max)+Number(min))-Number(min))+Number(min));

console.log("This is random number. You want to get at least "+randomNumber+" souvenirs in Japan for your people.");


var price = prompt ("how much is the souvenir?");


//total price of the random number of souvenirs
var totalPrice = price * randomNumber;

//how much is the total?
console.log ("Since the price of a souvenir is $"+price+", your total is $"+totalPrice+".");