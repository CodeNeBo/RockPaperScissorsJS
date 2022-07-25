console.log("Hello handsome!")

function getComputerChoise() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// TODO 
// 1. Write a func that starts the game 
// 2. Write a func that makes player to choose the fighter 
// 3. DONE Write a func that makes comp choose the fighter 
// 4. DONE Write a func that evaluates the fighters and choose a winner 
// 5. Write a func that counts who win 
// 6. Fix bugs 

function playRound (playerSelection, computerSelection) {
    let playerPoints = 0; 

    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') || 
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerPoints = 1;
        console.log('You win! ' + playerSelection.charAt(0).toUpperCase() + ' beats ' + computerSelection + '!')
    } else {
        computerPoints = 1;
        console.log('You lose! ' + computerSelection.charAt(0).toUpperCase() + ' beats ' + playerSelection + '!')
    }
    return playerPoints;
};