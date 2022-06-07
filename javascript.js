const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game () {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
}

function playRound (weapon){
    let playerSelection = weapon;
    const computerSelection = computerPlay () ;
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    let round = 0;
    round ++; 
    logRound(playerSelection, computerSelection, winner, round );
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
        return 'Player';
    } else {
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


