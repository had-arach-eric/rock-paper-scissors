function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch(randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "You tied the round. Both elections were rock";
    }
    else if (computerSelection === "paper") {
      return "You lost the round! Paper beats rock";
    }
    else {
      return "You won the round! Rock beats scissors";
    }
  } 
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You won the round! Paper beats rock";
    }
    else if (computerSelection === "paper") {
      return "You tied the round. Both elections were paper";
    }
    else {
      return "You lost the round! Scissors beats paper";
    }
  } 
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lost the round! Rock beats scissors";
    }
    else if (computerSelection === "paper") {
      return "You won the round! Scissors beats paper";
    }
    else {
      return "You tied the round. Both elections were scissors";
    }
  } 
  else {
    return "Your choice was wrong";
  }
}




