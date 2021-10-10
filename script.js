// Assignment Code
var generateBtn = document.querySelector("#generate");

// Input Object; Define all variables and their values that we need for securepassword
var input = {
  letter : ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r",
  "s","t","u","v","w","x","y","z"],

  letterUpper : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
  "S","T","U","V","W","X","Y","Z"],

  number : ["1","2","3","4","5","6","7","8","9","0"],

  char : ["#", "%", "@","?", "|","/","$","_","-"],
}
// //Random Function; Define assisstant-function to call later to generate different characters
function randomSel(arr){
  var index = Math.floor(Math.random() * arr.length);
  return index;
}
// //Function generatePassword; Prompt the inputs and generate the password
function generatePassword() {
  // Prompt: prompt the machine the type of characters include in password

  window.alert("please start password generation your password should contain at least one of the coming types");
  var smallLetterInclude = window.prompt("Enter   s   if you like your password include small letters");
  var capitalLetterInclude = window.prompt("Enter   c   if you like your password include capital letters");
  var numberInclude = window.prompt("Enter   n   if you like your password include numbers");
  var characterInclude = window.prompt("Enter   g   if you like your password include special characters");
  // While loop: check if the needed tyes are in hand or not, if not continue to message the user
  while (smallLetterInclude != "s" && capitalLetterInclude != "c" && numberInclude != "n" && characterInclude != "g"){
    window.alert("at least one of the types should be selected")
    var smallLetterInclude = window.prompt("Enter   s   if you like your password include small letters");
    var capitalLetterInclude = window.prompt("Enter   c   if you like your password include capital letters");
    var numberInclude = window.prompt("Enter   n   if you like your password include numbers");
    var characterInclude = window.prompt("Enter   g   if you like your password include special characters");

  }
  var numberOfCharacter = window.prompt("Enter the number of characters of password between 8 and 128");
  console.log(numberOfCharacter);
  var newNumber = parseInt(numberOfCharacter);
  // While loop: check if the number of the characters of the password are between 8 and 128 or not, if not message the user to input the right number
  while (newNumber < 8 || newNumber > 128){
    window.alert("the number of characters of the password should be between  8 and 128");
    var numberOfCharacter = window.prompt("Enter the number of characters of password between 8 and 128");
    console.log(numberOfCharacter);
    var newNumber = parseInt(numberOfCharacter);

  }
  console.log(typeof(newNumber));
  var securePass =[];
  count = 0;
  for (i = 0; i <= newNumber; i = count) {
    if (count > newNumber) {
        break;
      }
    if(smallLetterInclude){
      var smallLetter = input.letter[randomSel(input.letter)];
      count = count+1;}
      else {
        var smallLetter = "";
      }
      securePass.push(smallLetter);

      
    if (count >= newNumber) {
        break;
      }
    if(capitalLetterInclude){
      var capitalLetter = input.letterUpper[randomSel(input.letterUpper)];
      count = count+1;}
      else {
        var capitalLetter = "";
      }
      securePass.push(capitalLetter);


    if (count >= newNumber) {
      break;
      }
    if(numberInclude){
      var num = input.number[randomSel(input.number)];
      count = count+1;}
      else {
        var num = "";
      }   
      securePass.push(num);


    if (count >= newNumber) {
      break;
      }
    if (characterInclude){
      var character = input.char[randomSel(input.char)];
      count = count+1;}
      else {
        var character = "";
      }      
      securePass.push(character);
    // securePass.push(smallLetter,capitalLetter,num,character);
  
  }
  char = ""
  for (i = 0 ; i < securePass.length ; i ++){
      var char = char + securePass[i];
  }

  return char;

};
// //Function writePassword; call generatePassword and put it in the #password input
function writePassword() {
  // ___________________________________
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
