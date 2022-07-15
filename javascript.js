
// computer randomly returns rock, paper, or scissors strings
function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    if (num == 2) { 
        console.log(num);
        return 'rock'; 
    } else if (num == 1) { 
        console.log(num);
        return 'paper'; 
    }  
    else return 'scissors';
}

// play a single round of rock paper scissors  
function playRound(playerSelection, computerSelection) { 
    let playerChoice = playerSelection.toLowerCase(); 
    if (playerChoice == computerSelection) {
        return "Tie!";
    } else if (playerChoice == "rock") {  
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        } else return "You Win! Scissors beats Rock";
    } else if(playerChoice == 'paper') { 
        if(computerSelection == 'rock') { 
            return "You Win! Paper beats Rock";
        } else return "You Lose! Scissors beats Rock";
    } else { 
        if(computerSelection == 'paper') {
            return "You Win! Scissors beats Paper";
        } else return "You Lose! Rock beats Scissors";
    }
}

const playerSelection = "RoCk";
const computerSelection = getComputerChoice(); 
console.log(playRound(playerSelection, computerSelection)); 

function game () { 
    for(let i = 1; i <= 5; i++) { 
        let result = playRound(playerSelection, computerSelection); 
        console.log(result);
    }
}