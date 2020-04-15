Assignment Code
var generateBtn = document.querySelector("#generate");



var pwUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwLower = pwUpper.toLowerCase();

var pwSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

// Step 1: Confirm - generate a new password? Yes goes to next, cancel ENDS
var confirmPW = confirm("Let's generate a new password!");
alert("Your password must contain at least one number and one uppercase and lowercase letter, or a special character and at least 8 or more characters");

var confirmUpper = confirm("Do you want upper case letters?")
var confirmLower = confirm("Do you want lower case letters?")
var confirmNumeric = confirm("Do you want to use numbers?")
var confirmSpecial = confirm("Do you want special characters?")
var confirmLength = prompt("How long do you want your password to be (between 8 and 128?)")

// Step 2: PUSH results to end of this array
var showResult = [];
showResult.push("Upper case letters?  " + confirmUpper +
    "\nLower case letters?  " + confirmLower +
    "\nNumbers?  " + confirmNumeric +
    "\nSpecial characters?  " + confirmSpecial +
    "\nDesired password length:  " + confirmLength);

    alert(showResult);

// Step 3: set conditions
if (confirmUpper === true) {
    // if they want upper case, computer picks a letter between A and Z
    for (var i = 0; i < 10; i++) {
        var numU = pwUpper[Math.floor(Math.random() * pwUpper.length)];
        console.log(numU);
    }
}  

if (confirmLower === true) {
// if they want lower case, computer picks a letter between a and z
    for (var j = 0; j < 10; j++) {
        var pwLower = pwUpper.toString().tolowerCase();
        var numL = pwLower[Math.floor(Math.random() * pwLower.length)];
        console.log(pwUpper.charAt(pwUpper));
    }
}  

if (confirmNumeric === true) {
// Generate a random number between 0 and 9
    for (var i = 0; i < 10; i++) {
        // Generate a random number between 1 and 10
        var numN = Math.floor(Math.random() * 10);
        console.log(numN);
    }
}

if (confirmSpecial === true) {
// Generate a character from pwSpecial
    for (var j = 0; j < 10; j++) {
        // Generate a random character
        var numS = pwSpecial[Math.floor(Math.random() * pwSpecial.length)];
        console.log(numS);
    }
}


// alert: This is your password
// Write password to the #password input, with designated: MAIN generatePassword
    function writePassword() {   
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
          
        passwordText.value = password;
      }




// function  userrRiteria
// VAR CRITERIA = GATHERuSERcRITERIA
//       object 
//       types: {lowercase, uppercase, }
// returning them as an object - var criteriaObject
// store the info upfront


// use pure functions
