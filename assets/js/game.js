window.alert("Alert JavaScript is running");
var playerName = window.prompt("What is  your robot's name?");
console.log(playerName)
console.log("Our robot's name is " + playerName);
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
//console.log("Our robot's name is " + playerName")


  // Alert players that they are starting the round
  window.alert("Welcome to Gladiators!");

  // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the 'playerHealth' variable.
enemyAttack = playerHealth - enemyAttack;
// Log resulting message to the console so we know it worked.

var fight = function (){};