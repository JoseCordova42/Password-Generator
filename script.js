// Assignment Code
var lcLetters = "abcdefghijklmnopqrstuvwxyz";
var numerics = "0123456789";
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var userChoices = []; // filled with strings by getChars() (line 19) and used in for-loop (lines 64-72)

  //8-16 function returns password length after making sure it is between 8 and 128 characters
function getPwLength () { // called on line 59
  var pwLength = prompt("How long do you want your password to be? You can choose between 8 and 128 characters.");
  if (pwLength < 8 || pwLength > 128) {
    alert("Must be between 8 and 128 characters!");
    getPwLength();
  } else {
    return pwLength;
  }
};

  //19-41 function for determining password criteria
function getChars () { // called on line 60
  var low = confirm("Do you want lowercase letters?");
  var upp = confirm("Do you want uppercase letters?");
  var num = confirm("Do you want numbers?");
  var spec = confirm("Do you want special characters?");
  if (low === false && upp === false && num === false && spec === false) { // makes sure user picks at least one type
    alert("Must choose at least one type of character!");
    getChars();
  } else { // pushes respective string to empty userChoices array (line 5)
    if (low) {
      userChoices.push("low")
    }
    if (upp) {
      userChoices.push("upp")
    }
    if (num) {
      userChoices.push("num")
    }
    if (spec) {
      userChoices.push("spec")
    }
  }
};

  //44-55 functions for returning random lowercase, uppercase, number, and special characters
function randLow () { // potentially called on line 65
  return lcLetters[Math.floor(Math.random()*lcLetters.length)].toLowerCase();
};
function randUp () { // potentially called on line 67
  return lcLetters[Math.floor(Math.random()*lcLetters.length)].toUpperCase();
};
function randNum () { // potentially called on line 69
  return numerics[Math.floor(Math.random()*numerics.length)];
};
function randSpec () { // potentially called on line 71
  return specials[Math.floor(Math.random()*specials.length)];
};

  //58-75 function for the actual generation of the password based on the length and criteria the user chooses
function generatePassword() {
  var pwLength = getPwLength(); // line 8 function is called and return is used for local variable pwLength
  getChars(); // line 19 function is called
  var pwString = ""; // empty string to be filled by for-loop (lines 62-73)
  for (var i = 0; i < pwLength; i++) { // pwLength determines how many times to run loop
    var charOpts = userChoices[Math.floor(Math.random() * userChoices.length)]; // chooses random index from userChoices (line 5) that now has at least one value
    if (charOpts === "low") { // strings that ended up in empty array userChoices (line 5) now determine what functions from lines 44-45 will be called to build the password
      pwString = pwString + randLow();
    } else if (charOpts === "upp") {
      pwString = pwString + randUp();
    } else if (charOpts === "num") {
      pwString = pwString + randNum();
    } else if (charOpts === "spec") {
      pwString = pwString + randSpec();
    } 
  }
  return pwString; // used in line 81
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
