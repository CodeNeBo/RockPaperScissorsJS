let playerScore = 0;
let computerScore = 0;

let body = document.querySelector("body");

let welcomeText = document.createElement("h1"); 
welcomeText.className = "headText";
welcomeText.textContent = "Welcome to very cool Rock Paper Scissors battle!";
document.body.appendChild(welcomeText);

let scoreDiv = document.createElement("div");
scoreDiv.className = "scoreDiv";
document.body.appendChild(scoreDiv);

let dialogDiv = document.createElement("div");
dialogDiv.className = "dialogDiv";
document.body.appendChild(dialogDiv);

let buttons = document.createElement('div');
buttons.className = "buttons"
document.body.appendChild(buttons);

let rockButt = document.createElement("INPUT");
rockButt.setAttribute("type", "button");
rockButt.setAttribute("value", "rock");
buttons.appendChild(rockButt);

let paperButt = document.createElement("INPUT");
paperButt.setAttribute("type", "button");
paperButt.setAttribute("value", "paper");
buttons.appendChild(paperButt);

let scissorsButt = document.createElement("INPUT");
scissorsButt.setAttribute("type", "button");
scissorsButt.setAttribute("value", "scissors");
buttons.appendChild(scissorsButt);

const btn = document.querySelectorAll('input');

function getComputerChoise() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
};



function playRound (playerSelection) {
    let computerSelection = getComputerChoise(); 
    let result = "";
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            playerScore += 1;
            result = ('You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '!')

            if (playerScore == 5){
                result = ("Congratulations! You won! Press any button to play again.")
                playerScore = 0; 
                computerScore = 0;
            }
    } else if (playerSelection == computerSelection) {
        result = ("You both picked " + playerSelection + "... It's a tie!");
    } else {
        computerScore += 1; 
        result = ('You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '!')

        if (computerScore == 5){
            result = ("You lost! Press any button to play again.")
            playerScore = 0; 
            computerScore = 0;
        }
    }

    let currentPlayerScore = ("Player score: " + playerScore);
    let currentComputerScore = ("Computer score: " + computerScore);
    currentScore = `<div>${currentPlayerScore}</div><br><div>${currentComputerScore}</div>`
    scoreDiv.innerHTML = currentScore;

    document.querySelector('.dialogDiv').innerHTML = result;
    return
};

btn.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})