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
      alert('Please enter a number between 8 and 128')
      return '';
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