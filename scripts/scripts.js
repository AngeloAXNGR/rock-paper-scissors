const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices){
  let index = Math.floor(Math.random(0) * choices.length);
  let computerChoice = choices[index];
  return computerChoice;
}




let playerScore = 0;
let computerScore = 0;

// Best of 9 or First to Five
// let rounds = 9;


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



const finalResult = document.createElement('h1');
finalResult.setAttribute('style', 'text-align:center;')


function getScore(playerScore, computerScore){
  if(playerScore == 5){
    finalResult.textContent = `You Win!`;
    roundResult.textContent = ''
    document.body.appendChild(finalResult);
  }else if(computerScore == 5){
    finalResult.textContent = `You Lost!`;
    roundResult.textContent = ''
    document.body.appendChild(finalResult);
  }  
}




let roundResult = document.querySelector('#round-result');
roundResult.textContent = '';
roundResult.style.textAlign = 'Center';

function playRound(playerSelection, computerSelection){
  if(playerSelection == "rock" && computerSelection == "scissors"){
    roundResult.textContent = 'You Win! Rock Beats Scissors!';
    
    return playerScore++;

  }else if(playerSelection == "rock" && computerSelection == "paper"){
    roundResult.textContent = 'You Lose! Paper Beats Rock!';
    return computerScore++

  }else if(playerSelection == "paper" && computerSelection == "rock"){
    roundResult.textContent = 'You Win! Paper Beats Rock!';
    return playerScore++;

  }else if(playerSelection == "paper" && computerSelection == "scissors"){
    roundResult.textContent = 'You Lose! Scissors Beats Paper!';
    return computerScore++;

  }else if(playerSelection == "scissors" && computerSelection == "paper"){
    roundResult.textContent = 'You Win! Scissors Beats PAper!';
    return playerScore++;

  }else if(playerSelection == "scissors" && computerSelection == "rock"){
    roundResult.textContent = 'You Lose! Rock Beats Scissors!';
    return computerScore++
  }else{
    roundResult.textContent = "It's a Tie!";
  }
}

