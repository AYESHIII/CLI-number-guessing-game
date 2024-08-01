//#! user/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk"
console.log (chalk.greenBright.bold ('\n\t  * WeLCOME TO CLI NUMBER GUESSING GAME * \n\t'));
console.log ("=".repeat(60));

const randonNumber = Math.floor (Math.random() * 5 + 1);

const answers = await inquirer.prompt([
{
    name : "userguessednumber",
    type: "number",
    message: "enter your guess nunbmer (number limit from 1 to 5)",
},
]);
if (answers.userguessednumber === randonNumber){
    console.log(chalk.greenBright.bold ("\n\t * CONGRAULATION! YOU GUESS A CORRECT NUMBER *.\n\t"));

}
else {
    console.log (chalk.redBright.bold("\n\t * SORRY, YOU GUESS A  WRONG TRY AGAIN * \n\t"));
}
