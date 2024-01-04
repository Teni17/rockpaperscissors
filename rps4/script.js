let userchoice = ""
let usernum = 3
let userstatement = "";
let compstatement = "";
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let options = ["rock","paper","scissors"];
let compchoice = Math.floor(Math.random() * options.length)
let score = "";

function rockchoice(){
  userchoice = "rock"
  gamefunc();
}
function paperchoice(){
  userchoice = "paper"
  gamefunc();
}
function scissorschoice(){
  userchoice = "scissors"
  gamefunc();
}

document.getElementById("rock").addEventListener('click', rockchoice);
document.getElementById("paper").addEventListener('click', paperchoice);
document.getElementById("scissors").addEventListener('click', scissorschoice);
                                                    
  function gamefunc(){
    compchoice = Math.floor(Math.random() * options.length); 
   

userstatement = `${userchoice}`;
computerstatement = `${options[compchoice]}`;

switch(userchoice){
  case 'rock':
    usernum = 0;
    break;

  case 'paper':
    usernum = 1;
    break;

  case 'scissors':
    usernum = 2;
    break;
}
  
if(usernum == compchoice){
  score = "Its a tie!";
}
else if(usernum - compchoice == 1 || usernum - compchoice == -2){
  score = "The player wins!"}
else if(usernum - compchoice == -1 || usernum - compchoice == 2){
  score = "The computer wins!"}

document.getElementById("user-result").innnerHTML = userstatement;
console.log(userstatement);

document.getElementById("computer-result").innnerHTML = compstatement;
console.log(compstatement);

document.getElementById("score").innnerHTML = score;
console.log(score);
  }
//incomplete 