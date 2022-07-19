
// computer randomly returns rock, paper, or scissors strings
function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    if (num == 2) { 
        return 'rock'; 
    } else if (num == 1) { 
        return 'paper'; 
    }  
    else return 'scissors';
}

function getPlayerChoice() { 
    let playerChoice = prompt("Rock, paper or scissors?"); 
    if (playerChoice.toLowerCase() == "rock") { 
        return "rock"; 
    } else if (playerChoice.toLowerCase() == "paper") {
        return "paper";
    } else if (playerChoice.toLowerCase() == "scissors") { 
        return "scissors";
    } else alert("Not a valid input");
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

// plays five rounds of rock-paper-scissors
function game() {  
    let player = computer = 0;
    for(let i = 1; i <= 5; i++) { 
        const playerSelection = getPlayerChoice(); 
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection); 
        console.log(result); 
        if(result.includes("Win")) { 
            player++;
        } else if (result.includes("Lose")) { 
            computer++;
        } 
        console.log("Player score: ", player, "Computer score: ", computer);
    } 
    if(player > computer) { 
        console.log("Player won!");
    } else if (computer > player) { 
        console.log("Computer won!");
    } else console.log("Tie!");
}