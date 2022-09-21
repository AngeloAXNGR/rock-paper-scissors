const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices){
  let index = Math.floor(Math.random(0) * choices.length);
  let computerChoice = choices[index];
  return computerChoice;
}

// let test = getComputerChoice(choices);
// console.log(test);