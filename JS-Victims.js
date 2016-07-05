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


console.log(victimName)