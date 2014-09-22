//validating prompts

//minimum & maximum variable
var min = prompt ("please enter a minimum number");
var max = prompt ("please enter a maximum number");

//test to see that a number was actually entered!


//while loop runs as long as condition is true
while(isNaN(min) || min===""){
    min = prompt ("PLEASE enter a number and do not leave blank");//숫자 쓸 때까지 계속 나타남
}

var randomNumber = Math.round(Math.random()*(Number(max)-Number(min))+Number(min));

console.log(randomNumber);