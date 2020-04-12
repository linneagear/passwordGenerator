// Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var pwUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pwLower = pwUpper[25].toLowerCase();

// var pwSpecial = ["!", "@", "#", " $ % ^ & * ( ) _ +];
var pwNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Step 1: Confirm - generate a new password? Yes goes to next, cancel ENDS
var confirmPW = confirm("Let's generate a new password!");
alert("Your password must contain at least one number and one uppercase and lowercase letter, or a special character and at least 8 or more characters");

var confirmUpper = confirm("Do you want upper case letters?")
var confirmLower = confirm("Do you want lower case letters?")
var confirmNumeric = confirm("Do you want to use numbers?")
var confirmSpecial = confirm("Do you want special characters?")
var confirmLength = prompt("How long do you want your password to be (between 8 and 128?")
if (confirmLength < 8 || confirmLength > 128) {
    alert("Please pick a number between 8 and 128.")
} else {
    var showResult = [];
    //array for all the different types that will PUSH to end of this array
    showResult.push("Upper case letters?  " + confirmUpper +
        "\nLower case letters?  " + confirmLower +
        "\nNumbers?  " + confirmNumeric +
        "\nSpecial characters?  " + confirmSpecial +
        "\nDesired password length:  " + confirmLength);

    alert(showResult);
}

        for (var i = 0; i < 10; i++) {
            // Generate a random number between 1 and 10
            // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
            var num = Math.floor(Math.random() * 10) + 1;

      // Write password to the #password input
        function writePassword() {
          var password = generatePassword();
          var passwordText = document.querySelector("#password");

          passwordText.value = password;

        }
    }
