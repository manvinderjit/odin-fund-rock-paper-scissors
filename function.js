const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let roundsLeft = 5;

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

// Add a container div for result
const divResultContainer = document.createElement('div'); 

divResultContainer.setAttribute('id', 'result-container');
document.body.appendChild(divResultContainer);


// Add div for displaying total score
const totalScore = document.createElement('div');
// Style the div
totalScore.style.backgroundColor = 'lightpink';
totalScore.style.color = 'gray';
totalScore.innerHTML = "Your Score: " + playerScore + "<br/><br/>Computer Score: " + computerScore;
totalScore.style.margin = '10px 0px';
totalScore.style.padding = '20px';

divResultContainer.appendChild(totalScore);

// Get all buttons
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (roundsLeft > 0 ) {
            // Play the rounds
            addRoundResult(playRound(button.id, getComputerChoice()));
            
            // Decreement rounds left
            roundsLeft--;

            // Update the current score
            totalScore.innerHTML = "Your Score: " + playerScore + "<br/><br/>Computer Score: " + computerScore;

        } 
        // If all rounds are finished
        if (roundsLeft === 0) {

            // Add an h2 tag for the winner
            const declareWinner = document.createElement('h2');

            // Find the winner
            declareWinner.textContent = findWinner();

            // Style the h2 tag
            declareWinner.style.backgroundColor = 'lightpink';
            declareWinner.style.margin = '10px 0px';
            declareWinner.style.padding = '20px';
            declareWinner.style.color = 'red';

            // Add h2 result tag to the result container
            divResultContainer.appendChild(declareWinner);

            // Add a reset button
            const resetButton = document.createElement('button');
            resetButton.setAttribute('id', "reset-button");
            resetButton.textContent = "Reset Game";            
            divResultContainer.appendChild(resetButton);
            
            // Disable all other buttons, for rock, paper, scissor
            buttons.forEach(button  => {button.disabled = true;});

            document.getElementById("reset-button").setAttribute('onclick', "reloadPage();");          
            
        }        
    });
});

// Reloads the page
function reloadPage(){
    window.location.reload();
}

// Disables all buttons
// function disableButtons(){
//     // we use the .forEach method to iterate through each button
//     const buttons = document.querySelector('#rock');
//     buttons.forEach(button  => {button.disabled = true;});
// }


// Adds the round result
function addRoundResult(_roundResult) {
    const roundResult = document.createElement('h3');
    roundResult.textContent = _roundResult;
    divResultContainer.appendChild(roundResult);
}

//game();