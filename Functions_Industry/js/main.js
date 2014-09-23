//you have to have at least 100 square pixels image to have a great background in your website


//Asking the height and width of the image I picked?

//What is the height of the image?
var height = prompt("What is the height of your image?");

//what is the width of the image?
var width = prompt("What is the width of your image?");


var a = imageArea(height,width);



//Normal named function

console.log("Area of your image is "+a+".");


//Function name and functions
function imageArea(h,w){

    //Calculate the area of the rectangle/ code to execute
    var areaOfImage = h*w;

    //return it
    return areaOfImage;
}


//(condition to be met) ? first set of stuff : else stuff;

//Ternary

(a >= 100)?console.log("You can use your image."):console.log("You cannot use your image.");