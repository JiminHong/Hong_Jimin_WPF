// Jimin's web design company
// client will enter the number of pages they want to build.
// there is a minimum price
// there is a maximum number of pages we can build.
// we will charge $60 per a page after 10th pages.

alert("Hello! Welcome to Jimin's web design company!");

//ask how many pages do they want?
var pages = prompt("How many pages do you want to build for your website?");


//if the client put nothing 
if(pages === ""){

    pages = prompt ("PLEASE enter a number and do not leave blank");
}