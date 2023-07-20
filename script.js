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

function playRound(playerSelection, computerSelection, points) {
  const playerPointsUI = document.querySelector("#player-points");
  const computerPointsUI = document.querySelector("#computer-points");
  const message = document.querySelector("#round-message");
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      message.textContent = "You tied the round. Both elections were rock";
    }
    else if (computerSelection === "paper") {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints; 
      message.textContent = "You lost the round! Paper beats rock";
    }
    else {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      message.textContent = "You won the round! Rock beats scissors";
    }
  } 
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      message.textContent = "You won the round! Paper beats rock";
    }
    else if (computerSelection === "paper") {
      message.textContent = "You tied the round. Both elections were paper";
    }
    else {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints;
      message.textContent = "You lost the round! Scissors beats paper";
    }
  } 
  else {
    if (computerSelection === "rock") {
      points.computerPoints++;
      computerPointsUI.textContent = points.computerPoints;
      message.textContent = "You lost the round! Rock beats scissors";
    }
    else if (computerSelection === "paper") {
      points.playerPoints++;
      playerPointsUI.textContent = points.playerPoints; 
      message.textContent = "You won the round! Scissors beats paper";
    }
    else {
      message.textContent = "You tied the round. Both elections were scissors";
    }
  } 
}


function getFinalReport(playerPoints, computerPoints) {
  const message = document.querySelector("#final-message");
  if (playerPoints > computerPoints) {
    message.textContent = "YOU WON THE GAME";
  }
  else if (playerPoints < computerPoints) {
    message.textContent = "YOU LOST THE GAME";
  }
}


function game() {
  const points = {
    playerPoints: 0,
    computerPoints: 0,
  };
  let playerSelection = "";
  let playButtonsUI = document.querySelectorAll(".play-buttons");
  let messageUI = document.querySelector("#round-message");
  
  for (let i = 0; i < playButtonsUI.length; i++) {
    playButtonsUI[i].addEventListener("pointerdown", e => {
      playButtonsUI[i].style.border = "4px solid red";
      playerSelection = e.target.getAttribute("id");
      playRound(playerSelection, getComputerChoice(), points);
      if (points.playerPoints === 5 || points.computerPoints === 5) {
        getFinalReport(points.playerPoints, points.computerPoints);
      }
    });
  }
  for (let i = 0; i < playButtonsUI.length; i++) {
    playButtonsUI[i].addEventListener("pointerup", e => {
      playButtonsUI[i].style.border = "";
    });
  }

  
  
}
  






  /*
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
  
  alert(getFinalReport(playerPoints, computerPoints));
}
*/


game();