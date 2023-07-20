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

function playRound(playerSelection, computerSelection, points, playerPointsUI, computerPointsUI, roundMessageUI) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      roundMessageUI.textContent = "You tied the round. Both elections were rock";
    }
    else if (computerSelection === "paper") {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints; 
      roundMessageUI.textContent = "You lost the round! Paper beats rock";
    }
    else {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      roundMessageUI.textContent = "You won the round! Rock beats scissors";
    }
  } 
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      roundMessageUI.textContent = "You won the round! Paper beats rock";
    }
    else if (computerSelection === "paper") {
      roundMessageUI.textContent = "You tied the round. Both elections were paper";
    }
    else {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints;
      roundMessageUI.textContent = "You lost the round! Scissors beats paper";
    }
  } 
  else {
    if (computerSelection === "rock") {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints;
      roundMessageUI.textContent = "You lost the round! Rock beats scissors";
    }
    else if (computerSelection === "paper") {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      roundMessageUI.textContent = "You won the round! Scissors beats paper";
    }
    else {
      roundMessageUI.textContent = "You tied the round. Both elections were scissors";
    }
  } 
}


function getFinalReport(playerPoints, computerPoints, finalMessageUI) {
  if (playerPoints > computerPoints) {
    finalMessageUI.textContent = "YOU WON THE GAME";
    finalMessageUI.style.color = "green";
  }
  else if (playerPoints < computerPoints) {
    finalMessageUI.textContent = "YOU LOST THE GAME";
    finalMessageUI.style.color = "red";
  }
}

function resetUI(points, playerPointsUI, computerPointsUI, roundMessageUI, finalMessageUI) {
  points.playerPoints = 0;
  points.computerPoints = 0;
  playerPointsUI.textContent = "0";
  computerPointsUI.textContent = "0";
  roundMessageUI.textContent = "";
  finalMessageUI.textContent = "";
}

function playGame() {
  const points = {
    playerPoints: 0,
    computerPoints: 0,
  };
  let playerSelection = "";
  
  const playButtonsUI = document.querySelectorAll(".play-buttons");
  const playerPointsUI = document.querySelector("#player-points");
  const computerPointsUI = document.querySelector("#computer-points");
  const roundMessageUI = document.querySelector("#round-message");
  const finalMessageUI = document.querySelector("#final-message");
  const resetButtonUI = document.querySelector(".reset-button");

  resetButtonUI.addEventListener("click", () => {
    resetUI(points, playerPointsUI, computerPointsUI, roundMessageUI, finalMessageUI);
  });
  
  for (let i = 0; i < playButtonsUI.length; i++) {
    playButtonsUI[i].addEventListener("pointerdown", e => {
      playButtonsUI[i].style.border = "4px solid red";
      playerSelection = e.target.getAttribute("id");
      playRound(playerSelection, getComputerChoice(), points, playerPointsUI, computerPointsUI, roundMessageUI);
      if (points.playerPoints === 5 || points.computerPoints === 5) {
        getFinalReport(points.playerPoints, points.computerPoints, finalMessageUI);
      }
    });
  }
  for (let i = 0; i < playButtonsUI.length; i++) {
    playButtonsUI[i].addEventListener("pointerup", e => {
      playButtonsUI[i].style.border = "";
    });
  }
}

playGame();