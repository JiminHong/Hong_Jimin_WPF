
//A normal function

var heigth = 10;
var width = 10;

var a = areaRectangle(heigth,width);

console.log(a);

function areaRectangle(h,w) {

    var area = h*w;
    return area;
};


//Anonymous Function

var perimeterRectangle = function (h,w){

    var perimeter = (h+w)*2;
    return perimeter;
}

var anonF = perimeterRectangle(heigth,width);
console.log(anonF);