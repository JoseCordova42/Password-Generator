// Assignment Code
var lcLetters = "abcdefghijklmnopqrstuvwxyz";
var numerics = "0123456789";
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var userChoices = [];

console.log(userChoices);

function getPwLength () {
  var length = prompt("How long do you want your password to be? You can choose between 8 and 128 characters.");
  if (length < 8 || length > 128) {
    alert("Must be between 8 and 128 characters!");
    getPwLength();
  } else {
    userChoices.push(length)
  }
};
getPwLength();

function getChars () {
  var low = confirm("Do you want lowercase letters?");
  var upp = confirm("Do you want uppercase letters?");
  var num = confirm("Do you want numbers?");
  var spec = confirm("Do you want special characters?");
  if (low === false && upp === false && num === false && spec === false) {
    alert("Must choose at least one type of character!");
    getChars();
  } else {
    userChoices.push(low)
    userChoices.push(upp)
    userChoices.push(num)
    userChoices.push(spec)
  }
};
getChars();

console.log(userChoices);

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
