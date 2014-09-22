//Basic while Loop
//The while loop loops through a block of code as long as a specified condition is true


//initializing the counter variable
var counter = 0;

//starting the while loop with condition
//while condition is true, loop will run
//when condition is false, loop stops
while(counter<200){

    console.log("counter is counting!");
    counter++; //counts until condition is false
}


//Do While loops
//The do/while loop is a variant of the while loop.
//This loop will execute the code block once, before checking if
//the condition is true, then it will repeat the loop as long as the condition is true.


// while i is less than 10 let's do console.log("the number is i")
var i = 0;
//set a variable to hold our value

do{
    console.log("The number is "+ i);
    i++;
}
while(i<10);



//Basic For Loop
//for (initialization, condition, increment of change)
//WE use i frequent because it stands for iteration

for(var i=0;i<20;i+=3){
    //for loop initializes the variable i, sets a condition
    // i is less than 20, and adds increments of change + 3

    console.log("i = " +i);
    //show the value of i
    //runs as long as i is less than 20
}

//break
//1. var; 2. conditions; 3. increment 순서대로 쓴다.
for(var j=0; j<5; j++){

    if (j==3){
        // To make the loops stop, use BREAK
        break;
    }


    console.log("j = "+j);
}















