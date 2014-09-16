//I am planning for a trip to Japan and I want to get souvenirs as many as possible.
// However, because of budget I have to pick how many souvenir I will get.
// I want to get souvenirs at least for my family.

//how many family member do you have?

var min = prompt("How many family members do you have?");

var max = prompt("How many friends do you have?");


//your random price of a gift you can get for your people is.
//You can get - of gifts


if (max==="")
{
    console.log("please enter the number of your cousins");
    max = prompt ("If you don't have friend please enter the number of your cousins ");
}



var randomNumber = Math.round(Math.random()*((Number(max)+Number(min))-Number(min))+Number(min));

console.log("This is random number. You want to get "+randomNumber+" souvenirs in Japan for your family and friend(s) (or cousin(s)).");

