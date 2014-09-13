//based on budget can you buy an ipad?

var budget = 550;
var iPadPrice = 499.99;
var paycheck = 660;

/*
 //If the price of the iPad is less than our budget

 if(iPadPrice < budget){
 console.log("You can buy an iPad!");
 }else {
 console.log("You cannot buy an iPad!")
 }

 //AND if our paycheck is over 600
 if(paycheck > 600){
 console.log("You can buy an iPad!");
 }else{
 console.log("You cannot buy an iPad!");
 }

 */



//&& and operator - both must be true to be true


 if(iPadPrice < budget && paycheck > 600){
 console.log("You CAN buy an iPad!");
 }else {
 console.log("You cannot buy an iPad! :(");
 }



/*
//if the iPadPrice is less than your budget OR
//You won the lottery then you can buy your iPad!
var wonLottery = true;

if(iPadPrice < budget || wonLottery===true){
    console.log("You can buy an iPad!")
}else {
    console.log("You cannot buy an iPad!");
}
*/