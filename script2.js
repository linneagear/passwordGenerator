// #password is where the generated password will appear
// function writePassword() {   
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
      
//     passwordText.value = password;
//   }

// // This is going to be the main function, with as little code as possible.

var questions = [
    { q: "Do you want upper case letters?"},
    { q: "Do you want lower case letters?"},
    { q: "Do you want numbers?"},
    { q: "Do you want special characters?"},
]     

    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i].q);

    // Compare answers
        if ((criteria.lowercase === true) || 
        (answer === false && questions[i].a === "f")) {
        alert("You chose: " + types);
        }

        // end the loop for any other letter
        else if (letter !== null) {
            alert(letter + " is not a valid option.");
      }
    }

function userCriteria() {
    var criteria = gatherUserCriteria();
// object with our criteria
    var criteriaObject = {
        length = 0,
        types: {
            // just need to go back and do criteria.lowercase = true;
            lowercase = false,
            uppercase = false,
            numeric = false,
            specialChar = false
        }
    }
}

// Add event listener to generate password on 'click'
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword(lowercase, uppercase, numeric, specialChar, length) {
        // password variable that we build on
        // filter out uncomfirmed types
        // loop length and call generator function for EACH TYPE
        // Add final password to the password var and return it

        var gatherUserCriteria = "";
        // check the number of checked items
        var typesCount = lowerCase + upperCase + numeric + specialChar;
        var typesArr = [{lowerCase}, {upperCase}, {numeric}, {specialChar}]
        console.log("typesArr", typesArr);

        if(typesCount === 0) {
            return "";
        }
      //loop through arrays  
        for(let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {

            gatherUserCriteria = criteriaObject[lowercase]();
            });
        }
        var finalPassword = generatedPassword.slice(0, length));

        return finalPassword
    }


    // // filter the items that = true
    // if (criteriaObject !== false) {
    //     return criteriaObject
    // }


// Generate a random letter. 26 letters
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

    console.log(getNumeric());
    console.log(getLower());
    console.log(getUpper());
    console.log(getSymbol());
