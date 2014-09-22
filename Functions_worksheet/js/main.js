//calculate the circumference
function calcCircumference(radius,pi){

        //formula circumference
    var circumference = radius*pi;
    console.log(circumference);

        //return
    return circumference;
}

//The result of circumference
//Given radius and pi
var funcResult = calcCircumference(10,3.14);
//run the function again
console.log(funcResult);



//Stings

function calcStings(weight,stingsPerPound){

    //We need the weight of an animal and stings per a pound
    var totalStings = weight*stingsPerPound;
    console.log(totalStings);

    //return total stings
    return totalStings;
}

var funcResult = calcStings(80,8.666666667);
//run the function again
console.log(funcResult);