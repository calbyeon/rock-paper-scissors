const choices = ['rock','paper','scissors'];

function computerPlay(){
    return choices[Math.floor(Math.random()* 3)];
}

let computerSelection = computerPlay();
