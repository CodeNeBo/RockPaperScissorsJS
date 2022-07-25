console.log("Hello handsome!")

const computerChoise = Array("Rock", "Paper", "Scissors");

function getComputerChoice () {
    let result = computerChoise[Math.floor(Math.random()*computerChoise.length)];
    return result;
}

console.log(getComputerChoice)