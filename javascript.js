const choices = ['rock', 'paper', 'scissors'];
const winners = [];

let playerScore = 0;
let compScore = 0;
let round = 0;

const results = document.querySelector('.results');
const playerWin = document.createElement('div');
playerWin.classList.add('playerWin');

const roundCount = document.querySelector('.round');
roundCount.textContent = 'Round: ' + round;

function playRound (weapon){
    let playerSelection = weapon;
    const computerSelection = computerPlay () ;
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    ++round;
    if (round < 5){
        logRound(playerSelection, computerSelection, winner, round);
    }
    else if (round == 5){
        logRound(playerSelection, computerSelection, winner, round);
        logWins();
    }
    else {
        round = 0;
        playRound(weapon);
    }
    playerWin.textContent = 'Player:' + playerScore;
    roundCount.textContent = 'Round: ' + round;
}



function computerPlay () {
    return choices[Math.floor(Math.random() * choices.length )];
}

function playerChoice () {
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper or Scissors!!!');
    } 
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Spell it the right way!');
        while (input == null) {
            input = prompt('Type Rock, Paper or Scissors!!!');
        } 
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}



function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'paper')
    ){  
        ++playerScore;
        return 'Player';
    } else {
        ++compScore;
        return 'Computer';
        
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    if (winner != 'Tie'){
        console.log(winner, 'Won the Round!');
    }
    else console.log ('Tie');
    console.log('------------------------');
}


function playRock() {
    playRound('rock');
}function playScissors() {
    playRound('scissors');
}function playPaper() {
    playRound('paper');
}

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', playRock);  


const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', playPaper);

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', playScissors);


