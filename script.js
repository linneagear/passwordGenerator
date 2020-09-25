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
function generatePassword() {
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

function gatherUserCriteria() {
    // return criteria as an object
    var criteria = {
        length: 0,
        lowercase: false,
        uppercase: false,
        numeric: false,
        symbol: false
    }

    criteria.length = parseInt(prompt("how many characters do you want"))
    if (isNaN(criteria.length) || criteria.length < 8 || criteria.length > 128) {
        // break out of the function
        return {
            error: "doesnt meet criteria"
        }
    }
    criteria.lowercase = confrim("");
    criteria.uppercase = confrim("");
    criteria.numeric = confrim("");
    criteria.symbol = confrim("");
    return criteria;
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


function generateRandomStringFromList(characters, length, characterLists); {
    var randomString = '',
    for (var i = 0; i < length; i++) {
        var indexInList = Math.floor(Math.random() * characters.length)
        randomString += characters[IndexInList];
    }
    // call itself over and over until it has one from each criteria
    // an array of arrays
    for ()

        return randomString;
}