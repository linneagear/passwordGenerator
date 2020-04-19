# passwordGenerator
Homework 3 - Password Generator

## User story:

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria:

- GIVEN I need a new, secure password
- WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN prompted for character types to include in the password
- THEN I choose lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page

## Satisfying the Crieria:

- When the user clicks "Generate Password," prompts will appear asking what criteria the user would like. An event listener is added to the generate button 
- As long as the password is between 8 and 128, the function will run. Or else the user will have to resubmit.
- This user criteria is stored in an array which is then looped through the amount of times that the user wanted their password to be.
- This final array is then randomized and this is what appears when the user clicks generate password.

## Issues: 

The code was unsuccessful after trying to debug several times. There was confusion in what to put in the function and outside of the function. 
 
 I ran into several bugs: 
1. an output is undefined 
2. The password would randomize by *variable array* (A-Z vs 0-9), but would output the entire string of characters and not take the user length into account
3. It would successfully output the user's length input, but only one of the character variables they wanted.

I believe these had to do with pushing into an empty array, because the console would continue to show errors that my empty array variable was undefined.
When I solved one problem, another seemed to come up.

## In the Future:
I will go back after a couple weeks and start from scratch, after more practice. I'd try using more objects and trying different methods to try and fix this.

Instead of confirms and prompts, I'd put boxes for the user to check what they want. Then I can see if the criteria is checked or unchecked.


