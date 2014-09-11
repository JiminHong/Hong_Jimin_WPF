//Jimin Hong
//9/10/2014
//Web Programming Fundamentals
//Section_01
//Expression_Industry


//I build a website's homepage. The width is 1900px and height is 6000px.
//I would like to fill the background with a picture I like. The picture's width is 100px and height is 200px.
//How many pictures can I put in this homepage?

//How big is the homepage?
//What is the width of the homepage?

var widthPage = prompt ("What is the width of the homepage you would like to build?");

//What is the height of the homepage?

var heightPage = prompt ("What is the height of the homepage you would like to build?");

//What is the area of the homepage?

var areaPage = heightPage*widthPage;

console.log("Since width of the homepage is "+widthPage+"px and the height of it is "+heightPage+"px, the area of this homepage is "+areaPage+"px.");


//How big is the picture I would like to use as a background image?

//What is the width of the image I'd like to use?
var widthImage = prompt("What is the width of the image you would like to use?");

// What is the height of the image I'd like to use?
var heightImage = prompt ("What is the height of the image you would like to use?");

var areaImage = widthImage*heightImage;

console.log("Since the width of the image is "+widthImage+"px and the height of it is "+heightImage+"px, the area of the image is "+areaImage+"px.");


//To find out how many images I can put or use in this home page as a background image, I have to divide area of the homepage by the area of the area of image.

var numberImages = areaPage/areaImage;

console.log("Since the area of the homepage is "+areaPage+"px and the area of image is "+areaImage+"px, you can use "+numberImages+" images in this homepage as background image.");