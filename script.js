// Assignment Code
var generateBtn = document.querySelector("#generate");

// when button is pressed, generates password by this function
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

    // function to create password
    function generatePassword() {
        // conditionals to ask user's input
        var confirmLength = prompt("How many characters will your password be? (between 8 and 128)");
        var confirmUpper = confirm("Do you want upper case letters?")
        var confirmLower = confirm("Do you want lower case letters?")
        var confirmNumeric = confirm("Do you want to use numbers?")
        var confirmSpecial = confirm("Do you want special characters?")

        if (confirmLength >= 8 && confirmLength <= 128 ) {
          alert("You want" + confirmLength + " Characters.")
        } else {
            alert("Choose a number between 8 and 128.")
        }

        // push results into an empty array
        var arr = [];
        if (confirmLower === true) {
            var char = 'abcdefghijklmnopqrstuvwxyz';
            arr.push(char);
        }
        if (confirmUpper === true) {
            var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            arr.push(charUpper);
        } 
        if (confirmNumeric === true) {
            var num = '0123456789';
            arr.push(num);
        } 
        if (confirmSpecial === true) {
            var sym = '!@#$%^&*=-_';
            arr.push(sym);
        }
        console.log(arr);

         // randomize this array
        // run a for loop through the random array, to get the user's requested amount of variables
         for (var i = 0; i < confirmLength; i++) {
            var randomValue = arr[Math.floor(Math.random() * confirmLength)];
             return randomValue;
         }
         console.log(confirmUpper);
         console.log(confirmLower);
         console.log(confirmNumeric);
         console.log(confirmSpecial);
         console.log(generatePassword())
    }
   
// Add event listener to generate password on 'click'
generateBtn.addEventListener("click", writePassword);

