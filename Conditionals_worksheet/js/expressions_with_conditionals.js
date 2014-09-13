//Jimin Hong
//9/12/2014
//Web Programming Fundamentals
//Section_00
//Conditionals worsheet
// Expressions with conditionals




//What is the current temperature?
var degree = prompt("What is the current temperature?");

//What temperature type do you want to use?
var tempType = prompt("Do you want to convert it to Celsius or Fahrenheit?");


//Converting Fahrenheit to Celsius
convertedTempFtoC = (degree-32)/1.8;
//Converting Celsius to Fahrenheit
convertedTempCtoF = 1.8*degree+32;

//If you want to convert from Celsius to Fahrenheit
if(tempType === "Fahrenheit"){
    //Celsius to Fahrenheit

    console.log("The temperature is "+convertedTempCtoF+"F.");

}else if(tempType === "Celsius"){
    //Fahrenheit to Celsius

    console.log("The temperature is "+convertedTempFtoC+"C.");
}
