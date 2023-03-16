const james = 22
const valerie = 25
const kenneth = 27

const myAge = 24

/* 
Make an if/else statement to check if you are younger than James.
Make an else if statement within your if/else to check if you are older than Valerie.
Make another else if statement to check if you’re as old as Kenneth.
*/
if(myAge < james) {
    console.log('I am younger than James')
}
else if(myAge > valerie) {
    console.log('I am older than Valerie')
}
else if(myAge === kenneth) {
    console.log('I am as old as Kenneth');
}
else {
    console.log('I am ' + myAge + ' years old.');
}