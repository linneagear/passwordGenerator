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
]

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
]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// when button is pressed, generates password by this function
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// function to create password
function gatherUserCriteria() {
    if (criteria.error) {
        return criteria.error
    }

    // --------- PASSWORD LENGTH -----------//
    // stores password length
    var confirmLength = parseInt(prompt("How many characters will your password be? (between 8 and 128)"));
    
    // checks length, if > 8 characters and > 128
    if (confirmLength < 8) {
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
        confirmLength: confirmLength,
        confirmUpper: confirmUpper,
        confirmLower: confirmLower,
        confirmNumeric: confirmNumeric,
        confirmSpecial: confirmSpecial
      };

   return passwordOptions;
}


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
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
      }

    if (options.confirmLower) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        // push a random lower case letter into guaranteed
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
      }
    
    if (options.confirmNumeric) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        // push a random number into guaranteed
        guaranteedCharacters.push(getRandom(numericCharacters));
      }
    
    if (options.confirmSpecial) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        // push a random special character into guaranteed
        guaranteedCharacters.push(getRandom(specialCharacters));
      }


    // Loop through each array, possible and guaranteed, to then randomize again
    for (i = 0; i < possibleCharacters.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters)
        // push to the final result
        result.push(possibleCharacter);
    }

    for (i = 0; i < guaranteedCharacters.length; i++) {
        var guaranteedCharacter = getRandom(guaranteedCharacters)
        // push to the final result
        result.push(guaranteedCharacter);
    }
}



function gatherCharacters(criteria) {

    var characters = {
        length: 0,
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        symbol: '!@#$%^&*=-_'
    }
    var allowedCharacters = "";
    var allowedLists = [];
    // cancatenate these
    if (criteria.lowercase) {
        allowedCharacters += characterLists.lwoercase;
        allowedLists.push(characterLists.lwoercase).split('');
    }
    if (criteria.uppercase) {
        allowedCharacters += characterLists.lwoercase;
        allowedLists.push(characterLists.lwoercase.split(''));
    }
    if (criteria.numeric) {
        allowedCharacters += characterLists.lwoercase;
        allowedLists.push(characterLists.lwoercase.split(''));
    }
    if (criteria.lowercase) {
        allowedCharacters += characterLists.lwoercase;
        allowedLists.push(characterLists.lwoercase.split(''));
    }
    if (!criteria.length && !criteria.uppercase && ) {
        return {
            error: 'you must allow at least one type of character'
        }
    }
    // return allowed as array
    return {
        allowed: allowedCharacters.split(''),
        allowedLists: allowedLists
    }
}

// get a random element from all the characters
function generateRandom(arr); {
    var randomString = Math.floor(Math.random() * arr.length)

    // grab a random index out of the array
    var randomElement = arr[IndexInList];
    
    return randomElement;
}


// Add event listener to generate password on 'click'
generateBtn.addEventListener("click", writePassword);