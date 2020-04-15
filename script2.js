// Assignment Code
var generateBtn = document.querySelector("#generate");

// #password is where the generated password will appear. This needs to appear above eventlistener
function writePassword() {   
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

function userCriteria() {
    var criteria = gatherUserCriteria();
    // object with our criteria
    var criteriaObject = {
        length = 0,
        types: {
            lowercase = false,
            uppercase = false,
            numeric = false,
            specialChar = false
        }
    }

    if (criteriaObject.lowerCase === true) {

    }

    var questions = [
        { q: "Do you want upper case letters?"},
        { q: "Do you want lower case letters?"},
        { q: "Do you want numbers?"},
        { q: "Do you want special characters?"},
    ]
    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var answer = confirm(questions[i].q);
        // Compare answers
        if (answer === true) {
            alert("You chose: ");
        }
        else if (answer === false) {
            alert("You do not want ")
        }
    }
}

// // Add event listener to generate password on 'click'
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword() {
        // 1. password variable that we build on
        // 2. filter out uncomfirmed types
        // 3. loop length and call generator function for EACH TYPE
        // 4. Add final password to the password var and return it
        var typesCount = lowerCase + upperCase + numeric + symbol;
        var arr = [{lowerCase}, {upperCase}, {numeric}, {symbol}]

         if (typesCount === 0) {
            return " ";
         }
         else if (typesCount)

        return arr[Math.floor(Math.random() * arr.length)];
        }

        // for (i = 0; i < arr.length; i++) {
        //     let val = arr[i];
        // }
        
        // // push results of shuffled array to new, empty array
        // var showResult = [];
        // showResult.push(lowerCase + upperCase + numeric + symbol);
        // showResult = password;
        // return password;

    function getNumeric() {
        var numN = Math.floor(Math.random() * 10);
        return numN;
    }

    function getLower() {
        var pwLower = "abcdefghijklmnopqrstuvwxyz";
        return pwLower[Math.floor(Math.random() * pwLower.length)];
    }

    function getUpper () {
        var pwUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return pwUpper[Math.floor(Math.random() * pwUpper.length)];
    }

    function getSymbol() {
        var pwSymbol = "!@#$%^&*(){}[]=<>/,.";
        return pwSymbol[Math.floor(Math.random() * pwSymbol.length)];
    }