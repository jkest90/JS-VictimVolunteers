/* -----------victims---------------*/
var numVictims = prompt("How many disaster victims would you like to enter?");

var victimName =[]
var victimPhone=[]
var victimStreet=[]

function victimInput() {
    for (var i=0; i <= numVictims.length; i++) {
        victimName.push(prompt("Please enter your full name."));
        victimPhone.push(prompt("Please enter your phone number."));
        victimStreet.push(prompt("Please enter your street."));
    }
}

victimInput()
console.log(victimName)

/* -----------volunteers---------------*/

var numVolunteers = prompt("How many disaster volunteers would you like to enter?");

var volunteerName =[]
var volunteerPhone=[]
var volunteerStreet=[]

function volunteerInput() {
    for (var i=0; i <= numVolunteers.length; i++) {
        volunteerName.push(prompt("Please enter your full name."));
        volunteerPhone.push(prompt("Please enter your phone number."));
        volunteerStreet.push(prompt("Please enter your street."));
    }
}

var displayVic = []
var displayVol = []

for (var)