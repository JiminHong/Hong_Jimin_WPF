var gpa = 3.0;

//if GPA is over the min 2.0 score, then student can graduate

if(gpa > 2.0){
    console.log("You can graduate");
}else{
    console.log("You cannot graduate");
}


//(condition to be met) ? first set of stuff : else stuff;

(gpa > 2.0)?console.log("You can graduate"):console.log("You cannot graduate");