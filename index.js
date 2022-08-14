console.log("WELLCOME TO THE EPIC ROCK PAPER SCISSORS BATTLE!")

let body = document.querySelector("body");

let rockButt = document.createElement('button');
rockButt.innerHTML = "Rock";
document.body.appendChild(rockButt);

let paperButt = document.createElement('button');
paperButt.innerHTML = "Paper";
document.body.appendChild(paperButt);

let scissorsButt = document.createElement('button');
scissorsButt.innerHTML = "Scissors";
document.body.appendChild(scissorsButt);


function getComputerChoise() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound (playerSelection, computerSelection) {
    let playerPoints = 0; 

    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') || 
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerPoints = 1;
        console.log('You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '!')
    } else {
        computerPoints = 1;
        console.log('You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '!')
    }
    return playerPoints;
};

function play (totalRounds = 5) {
    let playerScore = 0; 
    let roundsPlayed = 0;

    while (roundsPlayed < totalRounds) {
        let playerSelection = prompt("Rock, Paper or Scissors? Choose your fighter!");
        playerSelection = playerSelection.toLowerCase();
        if ((playerSelection != 'rock') &&
           (playerSelection != 'paper') &&
           (playerSelection != 'scissors')) 
        {continue};
        
        let computerSelection = getComputerChoise();

        if (playerSelection == computerSelection) {
            console.log("You both picked " + playerSelection + "... It's a tie!");
            continue
        }

        playerScore += playRound(playerSelection, computerSelection)
        roundsPlayed++
    }

    if (playerScore > (roundsPlayed / 2)) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You win!')
    }
    else if (playerScore == (roundsPlayed / 2)) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You tied.')
    }
    else {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You lost!')
    }
}

// buttons.forEach(button =>{
//     button.addEventListener('click', function(){
//         playRound(button.value)
//     })
// })