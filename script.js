//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;

//Add code here
if(q1test % 3 == 0 && q1test % 5 == 0){
    console.log("fizz buzz")
}
else {
    if(q1test % 3 == 0){
        console.log("fizz")
    }
    
    if(q1test % 5 == 0){
        console.log("buzz")
    }
    
    else{
        console.log("no")
    }
};

//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.


// let year = 2000;
// let year = 1900;
// let year = 2024;

//Add code here
const year = [1999, 2000, 1900, 2024];

for (let i = 0; i < year.length; i++) {
    leapYear(year[i]);
}

function leapYear(theYear) {
    if ((theYear % 4 == 0) && (theYear % 100 !== 0) || (theYear % 400 == 0)) {
        console.log(theYear + " is a leap year.");
    } else {
        console.log(theYear + " is NOT a leap year.");
    }
}



//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

//Add code here

for (let i = 1; i < 100; i++) {
    if ((i % 3 == 0) || (i % 4 == 0)) {
        console.log(i);
    } else {
        console.log('-');
    }
}