
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

// asks the player to input a rock, paper, or scissors
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
        } else return "You Win! Rock beats Scissors";
    } else if(playerChoice == 'paper') { 
        if(computerSelection == 'rock') { 
            return "You Win! Paper beats Rock";
        } else return "You Lose! Scissors beats Paper";
    } else { 
        if(computerSelection == 'paper') {
            return "You Win! Scissors beats Paper";
        } else return "You Lose! Rock beats Scissors";
    }
}

// updates the player and computer scores
function score(string) { 
    if (string.includes("Win")) {  
        return playerScore++;
    } else if (string.includes("Lose")) { 
        return computerScore++;
    }
}

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button'); 
const div = document.createElement('div');  
div.textContent="Results:" 
div.setAttribute('style', 'white-space: pre;')
body.append(div); 

let playerScore = 0, computerScore = 0; 
let result = "";

// rock selection

const rock = document.querySelector('#rock'); 
rock.addEventListener('click', () => {  
    if(playerScore < 5 && computerScore < 5) { 
        result = playRound('rock', getComputerChoice());  
        clicked();
    } else announce ();
}) 

// paper selection 
const paper = document.querySelector('#paper'); 
paper.addEventListener('click', () => { 
    if (playerScore < 5 && computerScore < 5) { 
        result = playRound("paper", getComputerChoice());
        clicked();
    }  else announce();
})

// scissors selection
const scissors = document.querySelector('#scissors'); 
scissors.addEventListener('click', () => {  
    if(playerScore < 5 && computerScore < 5) { 
        result = playRound("scissors", getComputerChoice());
        clicked();
    }  else announce ();
}) 


// adds results of the round to the screen 
function clicked() { 
    div.textContent+= result;
    div.textContent+= "\n";  
    const numScore = score(result); 
    div.textContent+= "Player Score: " + (`${playerScore}`)+ " "+ 
        "Computer Score: " + (`${computerScore}`) + "\r\n";
} 

// once a player reaches 5, announces the winner of the game
function announce() {
    if (playerScore > computerScore) { 
        div.textContent+="Player won the game!"
    } else div.textContent+="Computer won the game!"
    return;
}