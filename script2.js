
// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate password on 'click'
generateBtn.addEventListener("click", writePassword);

// when button is pressed, generates password by this function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // have user enter password length
  var confirmLength = Number(prompt("How many characters will your password be? (between 8 and 128)"));

  // when button is pressed, THEN user prompts appear
  var confirmUpper = confirm("Do you want upper case letters?")
  var confirmLower = confirm("Do you want lower case letters?")
  var confirmNumeric = confirm("Do you want to use numbers?")
  var confirmSpecial = confirm("Do you want special characters?")

  // conditionals of what they want
  var arrCriteria = [];
  if (confirmLower === true) {
    getLower = "abcdefghijklmnopqrstuvwxyz";
    arrCriteria.push(getLower);
  } if (confirmUpper === true) {
    getUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    arrCriteria.push(getUpper);
  } if (confirmNumeric === true) {
    getNumeric = "0123456789";
    arrCriteria.push(getNumeric);
  } if (confirmSpecial === true) {
    getSpecial = "!@#$%^&*(){}[]=<>/,.";
    arrCriteria.push(getSpecial);
  }

  for (i = 0; i < confirmLength; i++) {
    console.log(arrCriteria[Math.floor(Math.random())]);
  }
  //return value
  // var newPW = " ";
  // for (var i = 0; i < confirmLength; i++) {
  //   //picks a character within charSet at index of random number
  //   newPW += getChar.charAt(Math.floor(Math.random() * getChar.length));
  // }
  // return newPW;
}





