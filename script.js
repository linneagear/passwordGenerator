// Get all characters that can be used first
// array of special characters that can be used
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// array of numbers that can be used
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// array of lowercase letters
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// array of uppercase letters
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];


// function to get user responses
function gatherUserCriteria() {

    // --------- PASSWORD LENGTH -----------//
    // stores password length
    var length = parseInt(prompt("How many characters will your password be? (between 8 and 128)"));
    
    // checks length, if > 8 characters and > 128
    if (length < 8) {
        alert('Password length must be at least 8 characters');
        return;
    }

    if (length > 128) {
        alert('Password length must less than 129 characters');
        return;
    }

    // -------- PASSWORD CHARACTERS ----------//
    var confirmUpper = confirm("Do you want upper case letters?")

    var confirmLower = confirm("Do you want lower case letters?")

    var confirmNumeric = confirm("Do you want to use numbers?")

    var confirmSpecial = confirm("Do you want special characters?")
    
    // store the user's input
    var passwordOptions = {
        length: length,
        confirmUpper: confirmUpper,
        confirmLower: confirmLower,
        confirmNumeric: confirmNumeric,
        confirmSpecial: confirmSpecial
      };

   return passwordOptions;
}

// get a random element from all the characters
// used throughout the code
function generateRandom(arr) {
    var randomString = Math.floor(Math.random() * arr.length)

    // grab a random index out of the array
    var randomElement = arr[randomString];
    
    return randomElement;
}

// pushes to empty arrays and randomizes those arrays
function generatePassword() {
    // get the user's responses
    var options = gatherUserCriteria();

    // to store the result in an empty array
    var result = [];

    // set up two arrays, one with possible values, another with guaranted values
    var possibleCharacters = [];

    var guaranteedCharacters = [];

    // if user chose each option, add to both possible and guaranteed
    if (options.confirmUpper) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        // push a random uppercase letter into guaranteed
        guaranteedCharacters.push(generateRandom(upperCasedCharacters));
      }

    if (options.confirmLower) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        // push a random lower case letter into guaranteed
        guaranteedCharacters.push(generateRandom(lowerCasedCharacters));
      }
    
    if (options.confirmNumeric) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        // push a random number into guaranteed
        guaranteedCharacters.push(generateRandom(numericCharacters));
      }
    
    if (options.confirmSpecial) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        // push a random special character into guaranteed
        guaranteedCharacters.push(generateRandom(specialCharacters));
    }


    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (i = 0; i < options.length; i++) {
        var possibleCharacter = generateRandom(possibleCharacters);
        // push teh possible character to the final result
        result.push(possibleCharacter);
    }

    // Mix in one guaranteed character in result, to further randomize
    for (i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }

    // Transform the result into a string and pass into writePassword
    // VERY IMPORTANT!
    return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// when button is pressed, generates password by this function
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate password on 'click'
generateBtn.addEventListener('click', writePassword);
