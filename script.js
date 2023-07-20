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

function playRound(playerSelection, computerSelection, points, playerPointsUI, computerPointsUI, roundMessage) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      roundMessage.textContent = "You tied the round. Both elections were rock";
    }
    else if (computerSelection === "paper") {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints; 
      roundMessage.textContent = "You lost the round! Paper beats rock";
    }
    else {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      roundMessage.textContent = "You won the round! Rock beats scissors";
    }
  } 
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      roundMessage.textContent = "You won the round! Paper beats rock";
    }
    else if (computerSelection === "paper") {
      roundMessage.textContent = "You tied the round. Both elections were paper";
    }
    else {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints;
      roundMessage.textContent = "You lost the round! Scissors beats paper";
    }
  } 
  else {
    if (computerSelection === "rock") {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints;
      roundMessage.textContent = "You lost the round! Rock beats scissors";
    }
    else if (computerSelection === "paper") {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      roundMessage.textContent = "You won the round! Scissors beats paper";
    }
    else {
      roundMessage.textContent = "You tied the round. Both elections were scissors";
    }
  } 
}


function getFinalReport(playerPoints, computerPoints, finalMessage) {
  if (playerPoints > computerPoints) {
    finalMessage.textContent = "YOU WON THE GAME";
    finalMessage.style.color = "green";
  }
  else if (playerPoints < computerPoints) {
    finalMessage.textContent = "YOU LOST THE GAME";
    finalMessage.style.color = "red";
  }
}


function game() {
  const points = {
    playerPoints: 0,
    computerPoints: 0,
  };
  let playerSelection = "";
  
  // DOM node references
  const playButtonsUI = document.querySelectorAll(".play-buttons");
  let messageUI = document.querySelector("#round-message");
  const finalMessage = document.querySelector("#final-message");
  const reset = document.querySelector(".reset-button");
  const playerPointsUI = document.querySelector("#player-points");
  const computerPointsUI = document.querySelector("#computer-points");
  const roundMessage = document.querySelector("#round-message");
  reset.addEventListener("click", () => {
    points.playerPoints = 0;
    points.computerPoints = 0;
    messageUI.textContent = "";
    finalMessage.textContent = "";
    playerPointsUI.textContent = "0";
    computerPointsUI.textContent = "0";
    roundMessage.textContent = "";
  })
  
  for (let i = 0; i < playButtonsUI.length; i++) {
    playButtonsUI[i].addEventListener("pointerdown", e => {
      playButtonsUI[i].style.border = "4px solid red";
      playerSelection = e.target.getAttribute("id");
      playRound(playerSelection, getComputerChoice(), points, playerPointsUI, computerPointsUI, roundMessage);
      if (points.playerPoints === 5 || points.computerPoints === 5) {
        getFinalReport(points.playerPoints, points.computerPoints, finalMessage);
      }
    });
  }
  for (let i = 0; i < playButtonsUI.length; i++) {
    playButtonsUI[i].addEventListener("pointerup", e => {
      playButtonsUI[i].style.border = "";
    });
  }


  
  
}





game();