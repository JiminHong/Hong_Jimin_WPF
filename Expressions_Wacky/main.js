//Jimin Hong
//9/10/2014
//Web Programming Fundamentals
//Section_01
//Expression_Wacky


//My boss required us to find 500 funny images for a project.
//I am one of the team leaders.
//We have total five teams.
//There are 4 team members in one team and there is one team leader in one team.
//If all people need to find same amount of images, how many images do I need to find?

//How many images does the boss require to you?
var totalImages = prompt("How many images did your boss require you to find?");

//how many teams do you guys have?
var numberTeams = prompt("How many teams do you have in your company?");

//How many images do each team have to find?

var imagesTeams = totalImages/numberTeams;
console.log("You are a team leader of Apple Company. You are required to find "+totalImages+" images by Tim Cook.");


//How many leaders do you have in a team?

var numberLeaders = prompt("How many team leaders do you have in a team?");

//How many team members are there?

var numberTeamMembers = prompt ("How many team members do you have in a team?");


console.log("There are "+numberTeams+" teams in your company. There are "+numberLeaders+" team leader(s) and there are "+numberTeamMembers+" team members in a team.")


//How many people are there in your company?

var peopleTeam = Number(numberLeaders)+Number(numberTeamMembers);

console.log("There are "+peopleTeam+ "people in a team.")

var peopleCompany =Number(peopleTeam)*Number(numberTeams);

console.log("There are "+peopleCompany+" people in this company.");

var imagePerPerson = totalImages/peopleCompany;

console.log("As a team leader, you have to find total "+imagePerPerson+" images.");


