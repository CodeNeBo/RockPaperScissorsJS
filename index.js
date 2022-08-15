let playerScore = 0;
let computerScore = 0;

let body = document.querySelector("body");

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
            console.log('You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '!')

            if (playerScore == 5){
                console.log("Congratulations! You won! Press any button to play again.")
                playerScore = 0; 
                computerScore = 0;
            }
    } else if (playerSelection == computerSelection) {
        console.log("You both picked " + playerSelection + "... It's a tie!");
    } else {
        computerScore += 1; 
        console.log('You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '!')

        if (computerScore == 5){
            console.log("You lost! Press any button to play again.")
            playerScore = 0; 
            computerScore = 0;
        }
    }
};

btn.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})