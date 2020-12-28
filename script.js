// Assignment Code
var lcLetters = "abcdefghijklmnopqrstuvwxyz";
var numerics = "0123456789";
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var userChoices = [];

alert("Get ready for your random password!");

userChoices.push(prompt("How long do you want your password to be? You can choose between 8 and 128 characters."));
userChoices.push(confirm("Do you want lowercase letters?"));
userChoices.push(confirm("Do you want uppercase letters?"));
userChoices.push(confirm("Do you want numbers?"));
userChoices.push(confirm("Do you want special characters?"));

var randLow = lcLetters[Math.floor(Math.random()*lcLetters.length)];
var randUp = lcLetters[Math.floor(Math.random()*lcLetters.length)].toUpperCase();
var randNum = numerics[Math.floor(Math.random()*numerics.length)];
var randSpec = specials[Math.floor(Math.random()*specials.length)];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
