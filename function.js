const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return ("Tie! " +  playerSelection + " = " + computerSelection);
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return ("You Lose! paper beats rock!")
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        return ("You Win! rock beats scissors!")
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return ("You Win! paper beats rock!")
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return ("You Lose! scissors beat paper!")
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return ("You Lose! rock beats scissors!")
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return ("You Win! paper beats scissors!")
    } else {
        alert("Please choose a valid input");
        let playerSelection = ((prompt("Choose 'rock', 'paper', or 'scissors'")).trim()).toLowerCase();
        return(playRound(playerSelection, getComputerChoice()));
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = ((prompt("Choose 'rock', 'paper', or 'scissors'")).trim()).toLowerCase();
        console.log(playRound(playerSelection, getComputerChoice()));
    }
    let winner = findWinner();
    console.log(winner)
    alert(winner);
}

function findWinner () {
    if(playerScore>computerScore){
        return("You Win");
    } else if(computerScore>playerScore){
        return("Computer Wins")
    } else{
        return("Its a Tie");
    }
}

game();