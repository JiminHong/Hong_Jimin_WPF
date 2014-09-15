var temp = prompt ("what is current temperature?");

var unit = prompt ("do you want to convert it to Fahrenheit or Celsius?");


convertFtoC = (temp-32)/1.8;
convertCtoF = 1.8*temp+32;

if (unit === "Fahrenheit"){

    console.log ("your temperature is "+convertCtoF+"F.");

}

else if (unit === "Celsius"){

    console.log ("Your temperature is "+convertFtoC+"C.");
}
