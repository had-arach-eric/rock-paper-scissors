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

function getPlayerChoice() {
  let selection;
  do {
    selection = prompt("Write rock, paper or scissors, depending on your choice.");
    selection = selection.toLowerCase();
    if (selection !== "rock" && selection !== "paper" && selection !== "scissors") {
      alert("The option you have chosen is incorrect, please choose again");
    }
  }while(selection !== "rock" && selection !== "paper" && selection !== "scissors");
  
  return selection;
}

function playRound(playerSelection, computerSelection) {
  
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
  else {
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
}

function getFinalReport(playerPoints, computerPoints) {
  if (playerPoints > computerPoints) {
    return `You won the game: the final result is: Player(${playerPoints}) - Computer(${computerPoints})`;
  }
  else if (playerPoints < computerPoints) {
    return `You lost the game: the final result is: Player(${playerPoints}) - Computer(${computerPoints})`;
  }
  else {
    return `You tied the game: the final result is: Player(${playerPoints}) - Computer(${computerPoints})`;
  }
}

function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  
  for (let i = 1; i <= 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    const roundReport = playRound(playerSelection, computerSelection);
    if (roundReport.startsWith("You won")) {
      playerPoints++;
      alert(roundReport);
    }
    else if (roundReport.startsWith("You lost")) {
      computerPoints++;
      alert(roundReport);
    }
    else {
      alert(roundReport);
    }
  }
  alert(getFinalReport(playerPoints, computerPoints));
}

game();