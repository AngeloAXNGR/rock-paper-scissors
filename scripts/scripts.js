const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices){
  let index = Math.floor(Math.random(0) * choices.length);
  let computerChoice = choices[index];
  return computerChoice;
}

// let playerInput = prompt('Select your weapon!');
// let computerInput = getComputerChoice(choices);

// console.log("Player: " + playerInput);
// console.log("Computer: " + computerInput);

let playerScore = 0;
let computerScore = 0;

let rounds = 5;


function playGame(playerSelection, computerSelection){
  if(playerSelection == "rock" && computerSelection == "scissors"){
    return playerScore++;
    
  }else if(playerSelection == "rock" && computerSelection == "paper"){
    return computerScore++

  }else if(playerSelection == "paper" && computerSelection == "rock"){
    return playerScore++;

  }else if(playerSelection == "paper" && computerSelection == "scissors"){
    return computerScore++;

  }else if(playerSelection == "scissors" && computerSelection == "paper"){
    return playerScore++;

  }else if(playerSelection == "scissors" && computerSelection == "rock"){
    return computerScore++

  }else{
    rounds++;
  }
}

function game(){
  for(let i = 1; i <= rounds; i++){
    let playerInput = prompt('Select your weapon!');
    let computerInput = getComputerChoice(choices);
    playGame(playerInput, computerInput);
    console.log("Player: " + playerInput);
    console.log("Computer: " + computerInput);
  }

  if(playerScore > computerScore){
    console.log("Player Wins!");
  }else{
    console.log("Computer Wins!");
  }
}
// playGame(playerInput, computerInput);

game();

console.log('Player Score: ' + playerScore);
console.log('Computer Score: ' + computerScore);
// let test = getComputerChoice(choices);
// console.log(test);