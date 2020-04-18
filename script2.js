var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//Step 1: Ask user for input
// when button is pressed, THEN user prompts appear
var confirmUpper = confirm("Do you want upper case letters?")
var confirmLower = confirm("Do you want lower case letters?")
var confirmNumeric = confirm("Do you want to use numbers?")
var confirmSpecial = confirm("Do you want special characters?")
//generate password
function generatePassword() {
  //evaluate character type
  var arr = "";
  if( confirmLower === true ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( confirmUpper === true ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert(generatePassword());
