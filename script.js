// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var userInput
var computerInput
var pwUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pwLower = pwUpper[].toLowerCase();
var pwSpecial

// var finalPW = [];
// var PW;

// Step 1: Confirm - generate a new password? Yes goes to next, cancel ENDS
var confirmPW = confirm("Would you like to generate a new password?");
    
if (confirmPW) {
    alert("Your password must contain the following password criteria: \n8-128 total characters, case-sensitive letters, numbers, and/or special characters")
} else {
    alert("You do not want to make a password.")
}



//criteria: alert length and characters, prompt ok

// For-Loop that will repeat three times.
// for (var i = 0; i < pwUpper.length; i++) {

//     //array for all the different types that will PUSH to end of this array
//     favTVshows.push(tvShow);
// }
// ask user how long it should be, between 8 and 128
// min = 8   max =
//user chooses lowercase, uppercase, numeric, or special characters

//add to end of array

