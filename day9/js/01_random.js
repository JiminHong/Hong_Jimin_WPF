//Random Number Functions

//Loops makes the functions run


var min = 180;
var max = 220;

            //argument = outside of function
var ranNum = randomizer(min,max);

console.log(ranNum);

            //parameter = inside of function
function randomizer(mn,mx){

                        //Having a random number
    var randomNumber = Math.round(Math.random()*(mx-mn)+mn);
    return randomNumber;
}

            //how many times will it run? 5? okay
for(var i = 0; i < 5; i++){

//you will get five whole random numbers!
    console.log(randomizer(min,max));

}