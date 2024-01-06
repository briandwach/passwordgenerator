// generateBtn variable identifies element in HTML that triggers initial prompts for password
var generateBtn = document.querySelector("#generate");


// Declaring other global variables
var password = "Your Secure Password";
var passLength = null;
var passwordHTML = document.querySelector("#password");


//Functions for password generation declared:
function writePassword() {
  passwordHTML.value = password;
};


//Syntax Errors
// ------------------------------------------------------------

//Any insufficient criteria causing password generation to need to be restarted
function insufficientCriteria() {
  password = "";
  passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
  writePassword();
};


// Password length syntax error
function funLengthSyntax() {
  passLength = window.prompt("Syntax Error:  Please enter password length as an integer (8-128)");

  if (passLength === null) {
    insufficientCriteria();
    return;
  };

  passLength = Number(passLength);

  if (!Number.isInteger(passLength)
    || (passLength < 8)
    || (passLength > 128)) {
    funLengthSyntax();
  } else {
    return;
  };
};




//Clean syntax from user input
// ------------------------------------------------------------


// Password length variable declared and generated
function funPassLength() {
  passLength = window.prompt("Choose password length (8-128)");

  if (passLength === null) {
    insufficientCriteria();
    return;
  };

  passLength = Number(passLength);

  if (!Number.isInteger(passLength)
    || (passLength < 8)
    || (passLength > 128)) {
    funLengthSyntax();
  } else {
    return;
  };
};



// Process for generating password
function generatePassword() {

  //Begins by calling functions for prompts which also check syntax
  funPassLength();

  //Once functions for criteria are working, a password will then need to be generated following the criteria

  //Final password written here if applicable.
  if (passLength !== null) {
    password = String(passLength);
    writePassword();
  } else {
    passwordHTML.value = "";
    passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
  }
  return;
};



// First writes password to the #password input (I have changed password to be a global variable)
function startPassword() {
  passwordHTML.value = "";
  passwordHTML.placeholder = "Follow Criteria Prompts";
  setTimeout(generatePassword, 100);
};



// Add event listener to generate button
generateBtn.addEventListener("click", startPassword);



/* The follow lines of code clear the written password box to show placeholder text

passwordHTML.value = "";
passwordHTML.placeholder = "Follow Criteria Prompts";

  */
