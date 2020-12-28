// Assignment Code
var lcLetters = "abcdefghijklmnopqrstuvwxyz";
// var ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerics = "0123456789";
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// var allChars = [lcLetters, ucLetters, numerics, specials];

// alert(allChars[Math.floor(Math.random()*allChars.length)][Math.floor(Math.random()*33)]);

var randLow = lcLetters[Math.floor(Math.random()*lcLetters.length)];
var randUp = lcLetters[Math.floor(Math.random()*lcLetters.length)].toUpperCase();
var randNum = numerics[Math.floor(Math.random()*numerics.length)];
var randSpec = specials[Math.floor(Math.random()*specials.length)];

// alert(randLow);
// alert(randUp);
// alert(randNum);
// alert(randSpec);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

alert("Get ready for your random password!");
confirm("Do you want lowercase letters?");
confirm("Do you want uppercase letters?");
confirm("Do you want numbers?");
confirm("Do you want special characters?");
