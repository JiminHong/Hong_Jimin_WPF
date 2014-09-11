//Jimin Hong
//9/10/2014
//Web Programming Fundamentals
//Section_01
//Expression_Personal


//How long I should work part-time if I would like to wear new t-shirts for every new classes?

//I can earn $10 per an hour.

var money = prompt("How much can I earn per one hour?");

//How much I will spend if I wear different t-shirts everyday and buy new one every time. T-shirt is $10 each.
var priceTshirt = prompt("How much is the t-shirt?");

//I have 2 class in this month.

var classes = prompt("What classes do you have in this month?");


//I have to go 11 times per one class in this month.
var times = prompt("How many times do I need to go for one class in this month?");



//How many times do I need to buy t-shirt in this month?or How many t-shirt do I need in this month?
var totalClassesTime = classes*times;
console.log(totalClassesTime);

console.log("I have "+classes+" class(es) in this month and I have to go " +times+ " times in one class. Therefore, I have to purchase "+totalClassesTime+" "+"t-shirts in this month.");


//If I need 11 t-shirts, how much do I need to buy them?
var totalMoney = totalClassesTime*priceTshirt;

console.log("Since a t-shirt is $"+priceTshirt+", I need $" +totalMoney+".");

//How many hours do I need to work?
var totalHours = totalClassesTime*priceTshirt/money;

console.log("Since I can earn $"+money+" per one hour, I need to work "+totalHours+" hours to get all of them.");

