//Step 1: Ask user for input
// when button is pressed, THEN user prompts appear
var confirmUpper = confirm("Do you want upper case letters?")
var confirmLower = confirm("Do you want lower case letters?")
var confirmNumeric = confirm("Do you want to use numbers?")
var confirmSpecial = confirm("Do you want special characters?")
var confirmLength = prompt("How long do you want your password to be (between 8 and 128?)")

// if i is true, then run the next function
// Step 2: set conditions
function userCriteria() {
    for (i=0; i < Object.confirmLength; i++)
}

// Each function will output random numbers, lowercase, uppercase, and special characters
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

function generatePassword() {
    var arr = [];
        if (confirmUpper === true) {
            arr.push(getUpper);
        } if (confirmLower === true) {
            arr.push(getLower);
        } if (confirmNumeric === true) {
            arr.push(getNumeric);
        } if (confirmSpecial === true) {
            arr.push(getSymbol);
        } else {
            console.log ("----");

    //Randomize arrayOfFunctions
    for (i=0; i < confirmLength; i++) {
        return arr[Math.floor(Math.random())];
    }

console.log(generatePassword());

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate password on 'click'
generateBtn.addEventListener("click", writePassword); 

//Get final password by using user length response
// confirmLength is the amount of characters the user wants, need to pull that here

// how are we going to generate a password an n number of times (confirmLength)?
// use a for loop where i < confirmLength

// how do we use for loop to call a certain function n number of times
// pushing results into an array, randomizing THOSE, use a function where if this is present, have if else statements within
// and then we know how many loops we need to run
// how to randomize function call based on each answer

// better to use objects combining all functions into one. Switch array to object, calling a function in an object
// will push ONLY ONCE before for loop because we don't want to add it repetitively n number of times, so have conditionals outside of for loop
// holding all functions in one object. 1 = getUpper. THis can be at the top, it doesn't matter. SCOPES?



// have an array where it pushes that character in array whenever the function is called
// how to call a certain function?

// console.log(getNumeric());
// console.log(getLower());
// console.log(getUpper());
// console.log(getSymbol());
// console.log(arrayOfFunctions);
// console.log(generatePassword());
// console.log(getArray());

// have an array of every character to randomize, and then pick out the numbers/letters?
function randomPassword(confirmlength) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < confirmlength; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}