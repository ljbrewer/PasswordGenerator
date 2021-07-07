
var choiceSets = {
  upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  digitChoices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialChar: ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\", ", ",", "]", "^", "_", "`", "{", "|", "}", "~"]
};

// ask user what they would like in their password
var upcase = prompt("Do you want Uppercase letters in your password?");
var lowcase = prompt("Do you want lowercase letters in your password?");
var digits = prompt("Do you want numeric digits in your password?");
var schar = prompt("Do you want Special Characters in your password?");
var passlength = prompt("How many characters do you want in your password, must be between 8 and 128")

// string to put password in
var choices ="";

// convert responses to lowercase
upcase = upcase.toLowerCase();
lowcase = lowcase.toLowerCase();
digits = digits.toLowerCase();
schar = schar.toLowerCase();

// var for count of items user said yes to
var typeofitems = 0;

// count number of yes responses
if ((upcase) === "yes") {
  typeofitems = typeofitems + 1 ;
}

if ((lowcase) === "yes") {
  typeofitems = typeofitems + 1 ;
}

if ((digits) === "yes") {
  typeofitems = typeofitems + 1 ;
}

if ((schar) === "yes") {
  typeofitems = typeofitems + 1 ; 
}

if (((passlength%typeofitems)) != 0) {
   typeofitems=typeofitems + (passlength%typeofitems);
}

//calculated the number of passes to get the correct number of items for the requested password length
passesNeeded = (passlength/typeofitems + passlength%typeofitems);

// loop to generate the password
for (i=0;i<passesNeeded;i++) {

//choose uppercase letters
console.log(upcase + " is upper");
if (upcase==="yes") {
  function getRandomInt() {
  return Math.floor(Math.random() * choiceSets.upper.length);
  } 
  choices = choices.concat(choiceSets.upper[getRandomInt()]);
}

//choose lowercase letters
if (lowcase === "yes") {
  function getRandomInt() {
  return Math.floor(Math.random() * choiceSets.lower.length);
  console.log(lowcase + " is lowercase");
  }
  choices = choices.concat(choiceSets.lower[getRandomInt()]);
}

//choose digits
if (digits === "yes") {
 function getRandomInt() {
 return Math.floor(Math.random() * choiceSets.digitChoices.length);
}
 choices = choices.concat(choiceSets.digitChoices[getRandomInt()]);
}

//choose special characters
if (schar === "yes") {
  function getRandomInt() {
  return Math.floor(Math.random() * choiceSets.specialChar.length);
  }
  choices = choices.concat(choiceSets.specialChar[getRandomInt()]);
}

} // end of For Loop

// Assignment Code
// create the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = choices.slice(0,passlength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)