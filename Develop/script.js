// Assignment Code
var generateBtn = document.querySelector("#generate");


// Input Object

var input = {
  letter : ["a", "b", "c", "d", "e", "f"],
  letterUpper : ["A","B","C","D","E"],
  number : [1, 3, 6, 9, 7, 8],
  char : ["#", "%", ",","?"]
}
function randomSel(arr){
  var index = Math.floor(Math.random() * arr.length);
  return index;
}
  // Write password to the #password input
function generatePassword() {

  var passLetter = input.letter[randomSel(input.letter)];
  var passLetterUpper = input.letterUpper[randomSel(input.letterUpper)];
  var passNumber = input.number[randomSel(input.number)];
  var passCharacter = input.char[randomSel(input.char)];
  var securePass = (passLetter + passLetterUpper + passNumber + passCharacter);
  return securePass

};

// ___________________________________
 function writePassword() {
  // ___________________________________
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
