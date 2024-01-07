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
var finalPassword = ["0"];


//Functions for password generation declared:
function writePassword() {
  passwordHTML.value = password;
};


//Syntax Errors from user input
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




//Generating the final password 
// ------------------------------------------------------------
function generatePassword() {

  finalPassword.length = 0;

  var passCriteria = {
    length: passLength,
    lower: passCharLower,
    upper: passCharUpper,
    numeric: passCharNumeric,
    special: passCharSpecial
  };

  var charOptions = 0;
  var allOptions = "";

  //The following if statements determine the collection and amount of characters to randomly choose from
  if (passCriteria.lower == "Yes") {
    charOptions = (charOptions + 26);
    allOptions = allOptions.concat("abcdefghijklmnopqrstuvwxyz");
  }

  if (passCriteria.upper == "Yes") {
    charOptions = (charOptions + 26);
    allOptions = allOptions.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (passCriteria.numeric == "Yes") {
    charOptions = (charOptions + 10);
    allOptions = allOptions.concat("0123456789");
  }

  if (passCriteria.special == "Yes") {
    charOptions = (charOptions + 29);
    allOptions = allOptions.concat("!#$%&'()*+,-./:;<=>?@[^_`{|}~");
  }

  allOptions = allOptions.split('');

  //This for loop selects the characters randomly and puts the password into an array
  for (var x = 0; x < passCriteria.length; x++) {
    var charGen = (Math.floor(Math.random() * charOptions));
    finalPassword.push(allOptions[charGen]);
  };

  console.log(finalPassword);
  return;
};



// Process for collecting password criteria
// ------------------------------------------------------------
function criteriaPassword() {

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


  //The following next if statements confirm whether all parameters are correct for generating the final password
  if (passCharSpecial !== null) {
    if (passCharSpecial == "Y") {
      passCharSpecial = "Yes";
    } else { passCharSpecial = "No" };
    if (passLength == "Yes" || passCharLower == "Yes" || passCharUpper == "Yes" || passCharNumeric == "Yes" || passCharSpecial == "Yes") {

      var confirmProceed = window.confirm("Generate password with the following criteria?\n\nLength: " + passLength +
        "\nLowercase characters: " + passCharLower +
        "\nUppercase characters: " + passCharUpper +
        "\nNumeric characters: " + passCharNumeric +
        "\nSpecial characters: " + passCharSpecial);

      if (confirmProceed) {
        generatePassword();
      } else {
        passwordHTML.value = "";
        passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
        return;
      };
    } else {
      window.alert("Unable to proceed with password generation.\n\nAt least one character type must be chosen.\n\nCurrent Password Criteria\nLength: " + passLength +
        "\nLowercase characters: " + passCharLower +
        "\nUppercase characters: " + passCharUpper +
        "\nNumeric characters: " + passCharNumeric +
        "\nSpecial characters: " + passCharSpecial);
      passwordHTML.value = "";
      passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
      return;
    }
  } else {
    passwordHTML.value = "";
    passwordHTML.placeholder = "Insufficient Criteria Chosen:\nPlease Generate Password Again";
    return;
  };



  //Final password written here if applicable.
  if (passLength !== null && passCharLower !== null && passCharUpper !== null && passCharNumeric !== null && passCharSpecial !== null) {
    //password = (String(passLength) + passCharLower + passCharUpper + passCharNumeric + passCharSpecial);

    //This takes the final password array and converts it to a string to dynamically change the HTML
    password = finalPassword.join("");
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
  setTimeout(criteriaPassword, 100);
};



// Add event listener to generate button
generateBtn.addEventListener("click", startNewPassword);



/* The follow lines of code clear the written password box to show placeholder text

passwordHTML.value = "";
passwordHTML.placeholder = "Follow Criteria Prompts";

  */