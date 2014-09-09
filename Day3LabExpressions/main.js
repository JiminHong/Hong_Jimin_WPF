//Jimin Hong
//9/08/2014
//Web Programming Fundamentals
//Section_01
//Expression


//Slice of Pie Part 1

//Calculate how many pieces of pizza partygoer will get at the party.
var slicesPerPizza = 8;
var people = 10;
var pizzas = 2;

//Calculate total pieces of pizza.
var totalPieces = slicesPerPizza * pizzas;

//Divide total pieces of pizza by number of people.
var slicesPerPerson = totalPieces/people;

//Output Area
console.log ("Each person ate" + " " + slicesPerPerson + " " + "slices of pizza at the party.");

//Slices of Pie Part 2

var sparky = (slicesPerPerson-1.0) * people;

console.log ("Sparky got"+" "+sparky+" "+"slices of pizza");

//Average Shopping Bill

var weeklyGrocery = [80,60,100,70,90];

var totalGroceries = weeklyGrocery[0]+weeklyGrocery[1]+weeklyGrocery[2]+weeklyGrocery[3]+weeklyGrocery[4];

var average = totalGroceries/5;

console.log("You have spent a total of $"+totalGroceries+" "+"on groceries over 5 weeks. That is an average of $"+average+" "+"per week."  );


//Discounts

var originalPrice = 40;
var discountPercentage = 10;
var description = "shoes";
var salesTaxPercentage = 6;

var beforeTax = originalPrice*0.9;
var total = beforeTax+(beforeTax*0.06);

console.log("Your "+description+" was originally $"+originalPrice+", but after a "+discountPercentage+"% discount, " +
    "it is now $"+beforeTax+" without tax, and $"+total+" with tax.");