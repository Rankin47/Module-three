// Assignment code here
var characterlength = 8
var choicearray = [];

var specialcharacter = ["!","@","#","$","%","^","&","*","(",")","-","+","=","-","<",">","/"];
var lowercasearray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var uppercasearray = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var numberarray = ["1","2","3","4","5","6","7","8","9"  ];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 function generatePassword(){

var  password = "";
for(var i = 0; i < characterlength; i++) {
    var randomletter = Math.floor (Math.random() * choicearray.length);
    password = password + choicearray[randomletter];
}
return password;
 }

function getPrompts(){
    choicearray = [];
    characterlength = parseInt(prompt("how long do you want your password? (8-128"));

    if(isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert("Must be 8-128 numerical digits >:(");
    return false; 
    }

if (confirm("Would you like to include lower case?")) {
    choicearray = choicearray.concat(lowercasearray);
}
if (confirm("Would you like to include upper case?")) {
    choicearray = choicearray.concat(uppercasearray);
}
if (confirm("Would you like to include special characters?")) {
    choicearray = choicearray.concat(specialcharacter);
}
if (confirm("Would you like to include numbers?")) {
    choicearray = choicearray.concat(numberarray);
}
return true;
 }



// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();

    if(correctPrompts) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
    } else{
passwordText.value = "";

    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);