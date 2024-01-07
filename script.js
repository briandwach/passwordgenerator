// generateBtn variable identifies element in HTML that triggers initial prompts for password
var generateBtn = document.querySelector("#generate");


// Declaring other global variables
var password = "Your Secure Password";
var passLength = null;
var passwordHTML = document.querySelector("#password");
var passCharLower;
var passCharUpper;
var passCharNumeric;
var passCharSpecial;


//Functions for password generation declared:
function writePassword() {
  passwordHTML.value = password;
};


//Syntax Errors
// ------------------------------------------------------------

//Any insufficient criteria requiring password generation to start over
function insufficientCriteria() {
  password = "";
  passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
  writePassword();
};


//Password length syntax error
function funLengthSyntax() {
  passLength = window.prompt("Syntax Error:\nPlease choose password length as an integer (Enter # 8-128)");

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

//Inlcude lowercase characters syntax error
function funPassLowercaseSyntax() {
  passCharLower = window.prompt("Current Password Critera\nLength: " + passLength +
    "\n\nSyntax Error:\nPlease confirm include lowercase characters? (Enter Y or N)");

  if (passCharLower === null) {
    insufficientCriteria();
    return;
  };

  passCharLower = passCharLower.toUpperCase();

  if (passCharLower != "Y" && passCharLower != "N") {
    funPassLowercaseSyntax();
  } else {
    return;
  };
};


//Include uppercase characters syntax error
function funPassUppercaseSyntax() {
  passCharUpper = window.prompt("Current Password Criteria\nLength: " + passLength +
    "\nLowercase characters: " + passCharLower +
    "\n\nSyntax Error:\nInclude uppercase characters? (Enter Y or N)");

  if (passCharUpper === null) {
    insufficientCriteria();
    return;
  };

  passCharUpper = passCharUpper.toUpperCase();

  if (passCharUpper != "Y" && passCharUpper != "N") {
    funPassUppercaseSyntax();
  } else {
    return;
  };
};

//Inlcude numeric characters syntax error
function funPassNumericSyntax() {
  passCharNumeric = window.prompt("Current Password Criteria\nLength: " + passLength +
    "\nLowercase characters: " + passCharLower +
    "\nUppercase characters: " + passCharUpper +
    "\n\nSyntax Error:\nInclude numeric characters? (Enter Y or N)");

  if (passCharNumeric === null) {
    insufficientCriteria();
    return;
  };

  passCharNumeric = passCharNumeric.toUpperCase();

  if (passCharNumeric != "Y" && passCharNumeric != "N") {
    funPassNumericSyntax();
  } else {
    return;
  };
};

//Include special characters syntax error
function funPassSpecialSyntax() {
  passCharSpecial = window.prompt("Current Password Criteria\nLength: " + passLength +
    "\nLowercase characters: " + passCharLower +
    "\nUppercase characters: " + passCharUpper +
    "\nNumeric characters: " + passCharNumeric +
    "\n\nSyntax Error:\nInclude special characters? (Enter Y or N)");

  if (passCharSpecial === null) {
    insufficientCriteria();
    return;
  };

  passCharSpecial = passCharSpecial.toUpperCase();

  if (passCharSpecial != "Y" && passCharSpecial != "N") {
    funPassSpecialSyntax();
  } else {
    return;
  };
};




//Clean syntax from user input
// ------------------------------------------------------------


// Password length prompt function
function funPassLength() {
  passLength = window.prompt("Choose password length (Enter # 8-128)");

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


//Confirm use of lowercase charaters function
function funPassLowercase() {
  passCharLower = window.prompt("Current Password Criteria\nLength: " + passLength +
    "\n\nInclude lowercase characters? (Enter Y or N)");

  if (passCharLower === null) {
    insufficientCriteria();
    return;
  };

  passCharLower = passCharLower.toUpperCase();

  if (passCharLower !== "Y" && passCharLower !== "N") {
    funPassLowercaseSyntax();
  } else {
    return;
  };
};

//Confirm use of uppcase charaters function
function funPassUppercase() {
  passCharUpper = window.prompt("Current Password Criteria\nLength: " + passLength +
    "\nLowercase characters: " + passCharLower +
    "\n\nInclude uppercase characters? (Enter Y or N)");

  if (passCharUpper === null) {
    insufficientCriteria();
    return;
  };

  passCharUpper = passCharUpper.toUpperCase();

  if (passCharUpper != "Y" && passCharUpper != "N") {
    funPassUppercaseSyntax();
  } else {
    return;
  };
};

//Confirm use of numeric characters function
function funPassNumeric() {
  passCharNumeric = window.prompt("Current Password Criteria\nLength: " + passLength +
    "\nLowercase characters: " + passCharLower +
    "\nUppercase characters: " + passCharUpper +
    "\n\nInclude numeric characters? (Enter Y or N)");

  if (passCharNumeric === null) {
    insufficientCriteria();
    return;
  };

  passCharNumeric = passCharNumeric.toUpperCase();

  if (passCharNumeric != "Y" && passCharNumeric != "N") {
    funPassNumericSyntax();
  } else {
    return;
  };
};

//Confirm use of special characters function
function funPassSpecial() {
  passCharSpecial = window.prompt("Current Password Criteria\nLength: " + passLength +
    "\nLowercase characters: " + passCharLower +
    "\nUppercase characters: " + passCharUpper +
    "\nNumeric characters: " + passCharNumeric +
    "\n\nInclude special characters? (Enter Y or N)");

  if (passCharSpecial === null) {
    insufficientCriteria();
    return;
  };

  passCharSpecial = passCharSpecial.toUpperCase();

  if (passCharSpecial != "Y" && passCharSpecial != "N") {
    funPassSpecialSyntax();
  } else {
    return;
  };
};



// Process for generating password
function generatePassword() {

  //Begins by calling functions for prompts which also check syntax
  funPassLength();

  if (passLength !== null) {
    funPassLowercase();
  } else {
    passwordHTML.value = "";
    passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
    return;
  }

  //Omitting this conversion to uppercase for now.  Instead converting variable to yes or no.
  //passCharLower = passCharLower.toUpperCase();

  if (passCharLower !== null) {
    if (passCharLower == "Y") {
      passCharLower = "Yes";
    } else { passCharLower = "No" };
    funPassUppercase();
  } else {
    passwordHTML.value = "";
    passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
    return;
  };

  if (passCharUpper !== null) {
    if (passCharUpper == "Y") {
      passCharUpper = "Yes";
    } else { passCharUpper = "No" };
    funPassNumeric();
  } else {
    passwordHTML.value = "";
    passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
    return;
  };

  if (passCharNumeric !== null) {
    if (passCharNumeric == "Y") {
      passCharNumeric = "Yes";
    } else { passCharNumeric = "No" };
    funPassSpecial();
  } else {
    passwordHTML.value = "";
    passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
    return;
  };


  //Once functions for criteria are working, a password will then need to be generated following the criteria

  //Final password written here if applicable.
  if (passLength !== null && passCharLower !== null && passCharUpper !== null && passCharNumeric !== null && passCharSpecial !== null) {
    password = (String(passLength) + passCharLower + passCharUpper + passCharNumeric + passCharSpecial);
    writePassword();
  } else {
    passwordHTML.value = "";
    passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
  }
  return;
};



// First writes password to the #password input (I have changed password to be a global variable)
function startNewPassword() {
  passwordHTML.value = "";
  passwordHTML.placeholder = "Follow Criteria Prompts";

  //setTimout is necessary for the above placeholder text change to be visible before window.prompt shows
  setTimeout(generatePassword, 100);
};



// Add event listener to generate button
generateBtn.addEventListener("click", startNewPassword);



/* The follow lines of code clear the written password box to show placeholder text

passwordHTML.value = "";
passwordHTML.placeholder = "Follow Criteria Prompts";

  */