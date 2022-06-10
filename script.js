const choices = ["rock", "paper", "scissors"];
const winners = [];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors!!!");
  }
  input = input.toLocaleLowerCase;
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Spell it the right way!");
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors!!!");
    }
    input = input.toLocaleLowerCase;
    check = validateInput(input);
  }
  return input;
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerPlay();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
}

function game() {
  for (let i = 0; i < 5, i++; ) {
    playRound();
  }
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results: ");
  console.log("Player Wins: ", playerWins);
  console.log("Computer Wins: ", computerWins);
  console.log("Ties: ", ties);
}
