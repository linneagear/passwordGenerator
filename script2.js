// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // #password is where the generated password will appear. This needs to appear above eventlistener
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//Ask user prompts

    var confirmUpper = confirm("Do you want upper case letters?")
    var confirmLower = confirm("Do you want lower case letters?")
    var confirmNumeric = confirm("Do you want to use numbers?")
    var confirmSpecial = confirm("Do you want special characters?")
    var confirmLength = prompt("How long do you want your password to be (between 8 and 128?)")

    var criteriaObject 
        length = confirmLength,
        types: {
            lowercase = confirmLower,
            uppercase = confirmUpper,
            numeric = confirmNumeric,
            specialChar = confirmSpecial
        }
    }    
    if (criteriaObject.uppercase === true) {
        alert("YOu want")
    }
    
console.log("-----RESPONSES----");
console.log("Uppercase? ");




//Function to filter responses
function userCriteria() {
    if (q1 === true) {

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
    var arr = [{ lowerCase }, { upperCase }, { numeric }, { symbol }]

    if (typesCount === 0) {
        return " ";
    }
    else if (typesCount)

        return arr[Math.floor(Math.random() * arr.length)];
}

generatePassword() = getNumeric() + getLower() + getUpper() + getSymbol()
return generatePassword();

// // push results of shuffled array to new, empty array
// var showResult = [];
// showResult.push(lowerCase + upperCase + numeric + symbol);
// showResult = password;
// return password;

function main() {
    lengthDefinition() = Math.floor(Math.random() * confirmLength);
}

function lengthDefinition() {
    return getNumeric() + getLower() + getUpper() + getSymbol()
    }

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