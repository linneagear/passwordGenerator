
// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate password on 'click'
generateBtn.addEventListener("click", writePassword); 

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

var confirmLength = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//Step 1: Ask user for input
// when button is pressed, THEN user prompts appear
var confirmUpper = confirm("Do you want upper case letters?")
var confirmLower = confirm("Do you want lower case letters?")
var confirmNumeric = confirm("Do you want to use numbers?")
var confirmSpecial = confirm("Do you want special characters?")

console.log(confirmUpper);
console.log(confirmUpper);
console.log(confirmUpper);
console.log(confirmUpper);
console.log(confirmLength);

//generate password
function userCriteria() {

  var arr = "";
  if( confirmLower === true ) {
    getLower = "abcdefghijklmnopqrstuvwxyz";
  } if( confirmUpper === true ) {
    getUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } if(confirmUpper === true) {
    getNumeric = "0123456789";
  } if( confirmSpecial === true ) {
    getSpecial = "!@#$%^&*(){}[]=<>/,.";
  } 

  //return value
  var newPW = "";
  for (var i = 0; i < confirmLength; i++) {
    //picks a character within charSet at index of random number
    newPW += getChar.charAt(Math.floor(Math.random() * getChar.length));
  }
  for (var i = 0; i < confirmLength; i++) {
    //picks a character within charSet at index of random number
    newPW += getChar.charAt(Math.floor(Math.random() * getChar.length));
  }
  return newPW;
}
console.log(userCriteria());

// function generatePassword() {
//     for (i=0; i < confirmLength; i++) {
//         return userCriteria[Math.floor(Math.random())];
//     }
// }


