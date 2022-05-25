const choices = ['rock','paper','scissors'];

function computerPlay(){
    return choices[Math.floor(Math.random()* 3)];
}

let computerSelection = computerPlay();

let playerSelectionOriginal = prompt("Choose your weapon!");
let playerSelection = playerSelectionOriginal.toLowerCase();

function playerPlay(){
    return playerSelection
}

function playRound(playerPlay,computerSelection) {
    if (playerPlay === computerSelection){
        return tie = "You tied!";
    }
    else if (playerPlay === 'rock'){
        if (computerSelection === 'paper'){
            computerScore++;
            return "You lose! Paper beats Rock!";
        }
        else if (computerSelection === 'scissors'){
            userScore++;
            return "You win! Rock beats Scissors!";
        }
    }
    else if (playerPlay === 'scissors'){
        if (computerSelection === 'paper'){
            userScore++;
            return "You win! Scissors Beats Paper!";
        }
        else if (computerSelection === 'rock'){
            computerScore++;
            return "You lose! Rock beats Scissors!";
        }
    }
    else if (playerPlay === 'paper'){
        if (computerSelection === 'rock'){
            userScore++;
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection === 'scissors'){
            computerScore++;
            return "You lose! Scissors beats paper!";
        }
    }
    else {
        return "Something went wrong.";
    }
}

let userScore = parseInt(0);
let computerScore = parseInt(0);

var i = 0;
function game(){
    let playerSelection = prompt("Pick a move!");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    console.log("Your score = " + userScore);
    console.log("Computer's score = " +computerScore);
    i++;
    if (i!==5){
        game();
    } else {
        alert("Game over User("+userScore+") vs Computer("+computerScore+")");
    }   
    }



