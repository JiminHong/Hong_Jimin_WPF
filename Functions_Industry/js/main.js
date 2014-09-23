//you have to have at least 100 square pixels image to have a great background in your website


//Asking the height and width of the image I picked?

var height = prompt("What is the height of your image?");

var width = prompt("What is the width of your image?");

var a = imageArea(height,width);


console.log(a);

function triangleArea(b,h){

    var area = .5*b*h;
    return area;
}





var gpa = 3.0;

//if GPA is over the min 2.0 score, then student can graduate

if(gpa > 2.0){
    console.log("You can graduate");
}else{
    console.log("You cannot graduate");
}


//(condition to be met) ? first set of stuff : else stuff;

(gpa > 2.0)?console.log("You can graduate"):console.log("You cannot graduate");