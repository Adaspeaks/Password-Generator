// Global Variables
var generateBtn = document.querySelector('#generate');
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var specChar = '!"#$%&\'*+,-./:;<=>?@^_`{|}~()[]"';
var numbers = '1234567890';
var wantedChar = '';
var password = '';

//end of Global Variables

//generator
function generatePassword(){
  var pwLength = prompt('Declare a password length\nMust be a number within 8-128')
    //length check
    if (pwLength >= 8 && pwLength <= 128) {
      console.log(pwLength)
   } 
    //failsafe
    else {
      alert('Please enter a number between 8 and 128');
    }
    //usercheck for parameters for wantedChar
  var passUpper = confirm ('Do you want to include uppercase letters (A-Z) in your password?')
  var passLower = confirm ('Do you want to include lowercase letters (a-z) in your password?')
  var passSpec = confirm ('Do you want to include special characters \n(!"#$%&\'*+,-./:;<=>?@^_`{|}~()[]")\n in your password?')
  var passNumbers = confirm ('Do you want to include numbers (0-9) in your password?')
    //end of usercheck
    if (passUpper) {
      wantedChar += uppercase
    }
    if (passLower) {
      wantedChar += lowercase
    }
    if (passSpec) {
      wantedChar += specChar
    }
    if (passNumbers) {
      wantedChar += numbers
    }
      //failsafe to check for a selected parameter
      if (
        !passUpper && !passLower && !passSpec && !passNumbers
        ) {
        return alert('Please select at least one parameter!');
      }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
//activates writePassword code block