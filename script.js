// Assignment Code
var lcLetters = "abcdefghijklmnopqrstuvwxyz";
var numerics = "0123456789";
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var userChoices = [];

function getPwLength () {
  var pwLength = prompt("How long do you want your password to be? You can choose between 8 and 128 characters.");
  if (pwLength < 8 || pwLength > 128) {
    alert("Must be between 8 and 128 characters!");
    getPwLength();
  } else {
    return pwLength;
  }
};

function getChars () {
  var low = confirm("Do you want lowercase letters?");
  var upp = confirm("Do you want uppercase letters?");
  var num = confirm("Do you want numbers?");
  var spec = confirm("Do you want special characters?");
  if (low === false && upp === false && num === false && spec === false) {
    alert("Must choose at least one type of character!");
    getChars();
  } else {
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

function randLow () {
  return lcLetters[Math.floor(Math.random()*lcLetters.length)].toLowerCase();
};

function randUp () {
  return lcLetters[Math.floor(Math.random()*lcLetters.length)].toUpperCase();
};

function randNum () {
  return numerics[Math.floor(Math.random()*numerics.length)];
};

function randSpec () {
  return specials[Math.floor(Math.random()*specials.length)];
};

function generatePassword() {
  var pwLength = getPwLength();
  getChars();
  var pwString = "";
  for (var i = 0; i < pwLength; i++) {
    var charOpts = userChoices[Math.floor(Math.random() * userChoices.length)];
    if (charOpts === "low") {
      pwString = pwString + randLow();
    } else if (charOpts === "upp") {
      pwString = pwString + randUp();
    } else if (charOpts === "num") {
      pwString = pwString + randNum();
    } else if (charOpts === "spec") {
      pwString = pwString + randSpec();
    } 
  }
  return pwString;
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
