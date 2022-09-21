const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices){
  let index = Math.floor(Math.random(0) * choices.length);
  let computerChoice = choices[index];
  return computerChoice;
}



let scores = [0,0]
let playerScore = scores[0]
let computerScore = scores[1]

// Best of 9 or First to Five
let rounds = 9;


function playRound(playerSelection, computerSelection){

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
  for(let i = 0; i < rounds; i++){
    let playerInput = prompt('Select Your Weapon: ');
    let computerInput = getComputerChoice(choices);
    playRound(playerInput.toLowerCase(), computerInput);
    console.log(`Player: ${playerScore} || Computer ${computerScore}`);

    // Whoever reaches 5 first will win and if it does, the round ends, otherwise (else) the game will continue.
    if(playerScore == 5){
      console.log("Player Wins!");
      break;
    }else if(computerScore == 5){
      console.log("Computer Wins...")
      break;
    }else{
      continue;
    }
  }

}

game();