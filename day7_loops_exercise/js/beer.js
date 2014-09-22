//Basic For Loop
// for (initialization, condition, increment of change)

//Create loop that makes the song 99 bottles of beer the wall.
//Until there are no more.

for(var i=99; i>0; i--){

    //console.log(i);

    console.log(i +" bottles of beer of the wall " + i +
    " bottles of beer");

    //console.log("Take one down, pass it around, " + (i-=1) + " bottles of beer " +  "on the wall.");

    if(i===1){

        console.log("Take one down, pass it around. No more bottles of beer! The End!")
    }else {
        console.log("Take one down, pass it around "+(i-=1)+" bottles of beer" + " on the wall.")

    }
}