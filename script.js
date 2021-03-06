// Assignment Code and Establishment of variables for Password generation
var generateBtn = document.querySelector("#generate");
var RandomLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var RandomUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var RandomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var RandomSymbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "_", "{", "|", "}", "~"];

function generatePassword() {

//prompt user for password criteria

// length: 8<var<128
var passLength = prompt("Enter the number of desired characters (8-128).", "8")
  if (passLength == null || passLength < 8 || passLength > 128) {
    //if less than 8 or greater than 128 or cancel, generator aborted and loops
    alert("Password generator aborted.\nPlease try again.");
    return ("Your Secure Password");
  } else {
    //onto next function for lowercase, and then so on
    var confirmLowercase = confirm("Click OK to confirm LOWERCASE character inclusion.");
    var confirmUppercase = confirm("Click OK to confirm UPPERCASE character inclusion.");
    var confirmNumber = confirm("Click OK to confirm NUMERIC character inclusion.");
    var confirmSymbol = confirm("Click OK to confirm SYMBOL character inclusion.");
  }


  //Assigning action to pass parameters. NEED TO CONCAT ANY AND ALL CONFIRMED CHARACTER PARAMETERS TOGETHER.
  //concat will join any and all confirmed arrays
  var passChar = []; 

  if (confirmLowercase) {
    passChar = passChar.concat(RandomLowercase)
  }

  if (confirmUppercase) {
    passChar = passChar.concat(RandomUppercase)
  }

  if (confirmNumber) {
    passChar = passChar.concat(RandomNumber)
  }

  if (confirmSymbol) {
    passChar = passChar.concat(RandomSymbol)
  }

//Returned values once password parameters applied
var ReturnedPassValue = "";

for (var i=0; i < passLength; i++) {
    ReturnedPassValue = ReturnedPassValue + passChar[Math.floor(Math.random() * passChar.length)];
    console.log("Your Secure Password")
}
    
return ReturnedPassValue;
} 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //need to make generatePassword function.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

