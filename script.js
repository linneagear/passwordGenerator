// Assignment Code
var generateBtn = document.querySelector("#generate");


var confirmUpper = confirm("Do you want upper case letters?")
var confirmLower = confirm("Do you want lower case letters?")
var confirmNumeric = confirm("Do you want to use numbers?")
var confirmSpecial = confirm("Do you want special characters?")
var confirmLength = prompt("How long do you want your password to be (between 8 and 128?)")

// Step 2: set conditions
if (confirmUpper === true) {
    alert("You want uppercase letters.")
} if (confirmLower === true) {
    alert("You want lowercase letters.");
} if (confirmNumeric === true) {
    alert("You want numbers.")
} if (confirmSpecial === true) {
    alert("You want special characters");
}


// Will output random numbers, lowercase, uppercase, and special characters
function getNumeric() {
    var pwNum = Math.floor(Math.random() * 10);
    return pwNum;
}

function getLower() {
    var pwLower = "abcdefghijklmnopqrstuvwxyz";
    return pwLower[Math.floor(Math.random() * pwLower.length)];
}

function getUpper() {
    var pwUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return pwUpper[Math.floor(Math.random() * pwUpper.length)];
}

function getSymbol() {
    var pwSymbol = "!@#$%^&*(){}[]=<>/,.";
    return pwSymbol[Math.floor(Math.random() * pwSymbol.length)];
}

// Adds all of the random functions results above
function lengthDefinition() {
    return getNumeric() + getLower() + getUpper() + getSymbol()
}

var arrayOfFunctions = [];
    // which functions n number of times


//Get final password by using user length response
// confirmLength is the amount of characters the user wants, need to pull that here

// how are we going to generate a password an n number of times (confirmLength)?
// use a for loop where i < confirmLength

// how do we use for loop to call a certain function n number of times
// pushing results into an array, randomizing THOSE, use a function where if this is present, have if else statements within
// and then we know how many loops we need to run
// how to randomize function call based on each answer

// better to use objects combining all functions into one. Switch array to object, calling a function in an object
// will push ONLY ONCE before for loop because we don't want to add it repetitively n number of times
// holding all functions in one object. 1 = getUpper. THis can be at the top, it doesn't matter. SCOPES?

if (confirmUpper === true) {
    arrayOfFunctions.push(getUpper);
} else if (confirmLower === true) {
    arrayOfFunctions.push(getLower);
} else if (confirmLower === true) {
    arrayOfFunctions.push(getLower);
} else if (confirmLower === true) {
    arrayOfFunctions.push(getLower);
}

for (i=0; i < confirmLength; i++) {
    arrayOfFunctions[Math.floor(Math.random())];

    console.log(arrayOfFunctions[0]);
}


// have an array where it pushes that character in array whenever the function is called
// how to call a certain function?



console.log(getNumeric());
console.log(getLower());
console.log(getUpper());
console.log(getSymbol());
console.log(lengthDefinition());
// console.log(generatePassword());
