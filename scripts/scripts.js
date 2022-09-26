const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices){
  let index = Math.floor(Math.random(0) * choices.length);
  let computerChoice = choices[index];
  return computerChoice;
}




let playerScore = 0;
let computerScore = 0;
let round = 1;



// Get three buttons
const btns = document.querySelectorAll('button');
let playerTally = document.querySelector('.player-score');
let computerTally = document.querySelector('.computer-score');

btns.forEach((btn) =>{
  btn.addEventListener('click', () =>{
    playerInput = btn.textContent.toLowerCase();
    computerInput = getComputerChoice(choices);
    playRound(playerInput, computerInput);
    getScore(playerScore, computerScore);
    computerTally.textContent = computerScore;
    playerTally.textContent = playerScore;
  });
});





function getScore(playerScore, computerScore){
  if(playerScore == 5){
    roundResult.textContent = 'Winner: Player'
    roundResult.style.color = "green";
  }else if(computerScore == 5){
    roundResult.textContent = 'Winner: Computer'
    roundResult.style.color = "red";
  }  
}




let roundResult = document.querySelector('#round-result');
roundResult.textContent = '';
roundResult.style.textAlign = 'Center';

function playRound(playerSelection, computerSelection){
  if(playerSelection == "rock" && computerSelection == "scissors"){
    roundResult.textContent = `Round ${round} Result: Win! Rock Beats Scissors!`;
    round++
    
    return playerScore++;

  }else if(playerSelection == "rock" && computerSelection == "paper"){
    roundResult.textContent = `Round ${round} Result: Lose! Paper Beats Rock!`;
    return computerScore++

  }else if(playerSelection == "paper" && computerSelection == "rock"){
    roundResult.textContent = `Round ${round} Result: Win! Paper Beats Rock!`;
    return playerScore++;

  }else if(playerSelection == "paper" && computerSelection == "scissors"){
    roundResult.textContent = `Round ${round} Result: Lose! Scissors Beats Paper!`;
    return computerScore++;

  }else if(playerSelection == "scissors" && computerSelection == "paper"){
    roundResult.textContent = `Round ${round} Result: Win! Scissors Beats Paper!'`;
    return playerScore++;

  }else if(playerSelection == "scissors" && computerSelection == "rock"){
    roundResult.textContent = `Round ${round} Result: Lose! Rock Beats Scissors!`;
    return computerScore++
  }else{
    roundResult.textContent = `Round ${round} Result: Tie!`;
  }
}

