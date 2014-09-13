//Jimin Hong
//9/12/2014
//Web Programming Fundamentals
//Section_00
//Conditionals worsheet
// Expressions with conditionals





var degree = prompt("What is the current temperature?");

var convert = prompt("Do you want to convert it to Celsius or Fahrenheit?");

convertedTempFtoC = (degree-32)/1.8;
convertedTempCtoF = 1.8*degree+32;


if(convert = "Fahrenheit"){
    //Celsius to Fahrenheit

    console.log("The temperature is "+convertedTempCtoF+"F.");
}else if(convert = "Celsius"){
    //Fahrenheit to Celsius

    console.log("The temperature is "+convertedTempFtoC+"C.");
}



/*
if(convertUnit = "celsius"){

    convertedTempFtoC = (degree-32)/1.8;
    console.log("The temperature is "+convertedTempFtoC+"C.");

}else if(converUnit = "Fahrenheit"){
    convertedTempCtoF = (1.8*degree)+32;
    console.log("The temperature is "+convertedTempCtoF+"F.");
}
*/


/*
var tempType = "celsius";

if(tempType = "celsius"){
    convertedTempFtoC = (degree-32)/1.8;
    convertedTempCtoF = (1.8*degree)+32;
    console.log("The temperature is " + convertedTempFtoC);

}else{
    console.log("The temperature is "+degreeCelsius+"C.");
}

*/