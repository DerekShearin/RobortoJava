//1: is there any usefulness to indenting in java. does it affect the code, or add clarity to code?

//2: what exactly does the "fight" function do? I don't underestand how it works.

//3: how does order work in Java? promptFight (l.26) comes after window.alert "Welcome..." (l.22)

//4: usage of curly brackets?

//5: Define parts of the java code and their function

//variables

var playerName = window.prompt("What is  your robot's name?");
console.log(playerName)
console.log("Our robot's name is " + playerName);
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {

// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");
};

fight();

//prompt player to fight or not to fight?
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//If player chooses to fight:
if (promptFight === "fight" || promptFight === "FIGHT"); { enemyHealth = enemyHealth - playerAttack;
};

console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
 
  //check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

playerHealth = playerHealth - enemyAttack;

console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//check player health:
if (playerHealth <= 0) {
window.alert(playerName + " has died!");
} else { window.alert(playerName +  " still has " + playerHealth + " health left.");
}

// if player chooses to skip:  
// else if (promptFight === "skip" || promptFight === "SKIP"); 
//   window.alert(playerName + " has chosen to skip the fight.");
//   var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//   if (confirmSkip) {
//       window.alert(playerName + " has decided to skip this fight. Goodbye!");
//       playerMoney = playerMoney - 2; 
// } else {
//   window.alert("You need to choose a valid option. Try again!");
//  }; else { 
//    fight(); 
//  }


//  Game states:
// "WIN" - player robot has defeated all enemy robots
//  *fight all enrmy-robots
//  * defeat all enemy-robots
//  "LOSE" - Player robot's health is equal to zero or less than (playerHealth <= 0)
  