// SETTING UP VARIABLES //
let compScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.gameButton')

document.getElementById("rock").value = "ROCK"; 
document.getElementById("paper").value = "PAPER"; 
document.getElementById("scissors").value = "SCISSORS"; 

// DOM BUTTON FUNCTIONALITY //

// Registers the click input and excecute function 'playRound'

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})

//Disables the buttons if function is called upon (in our playRound function)
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}














function computerPlay() {
    let hands = ["rock","paper","scissors"];
    let randHand = hands[Math.floor(Math.random() * hands.length)].toUpperCase();
    return randHand

}

function playRound(playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        playbyplay.textContent = `It's a draw!\r\nScore is ${playerScore}-${compScore}`;
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        compScore += 1;
        playbyplay.textContent = `You lose! Paper beats rock!\r\nScore is ${playerScore}-${compScore}`;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        playerScore += 1;
        playbyplay.textContent = `You win! Rock beats scissors!\r\nScore is ${playerScore}-${compScore}`;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        compScore += 1;
        playbyplay.textContent = `You lose! Rock beats scissors!\r\nScore is ${playerScore}-${compScore}`;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        playerScore += 1;
        playbyplay.textContent = `You win! Scissors beats paper!\r\nScore is ${playerScore}-${compScore}`;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        playerScore += 1;
        playbyplay.textContent = `You win! Paper beats rock!\r\nScore is ${playerScore}-${compScore}`;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        compScore += 1;
        playbyplay.textContent = `You lose! Scissors beats paper!\r\nScore is ${playerScore}-${compScore}`;
    }
    if (playerScore === 5 || compScore === 5) {
        disableButtons();
        showWinner();
    }
}


// used in old version 
// function game() {
// // for (let i=0; i < 5; i++) {
//     // let playerSelection = prompt("Enter your move").toUpperCase()
//     // let computerSelection = computerPlay()

//     playRound(playerSelection,computerSelection)

    

    
// // }
//     showWinner()

// }

function showWinner() {
    if (playerScore > compScore) {
        results.textContent = `You won the game! Final score was ${playerScore}-${compScore}!`;
        playbyplay.textContent = 'Reload to play again';
    } else if (compScore > playerScore) {
        results.textContent = `You lost the game! Final score was ${playerScore}-${compScore}!`;
        playbyplay.textContent = 'Reload to play again';
    } else {
        results.textContent = `Tie! Score was ${playerScore}-${compScore}!`;
    }

}



var results = document.createElement("div");
results.style.width = "200px";
results.style.height = "50px";
results.style.background = "red";
results.style.color = "white";
results.style.marginTop = '100px'
results.style.textAlign ='center';

var playbyplay = document.createElement("div");
playbyplay.style.width = "200px";
playbyplay.style.height = "50px";
playbyplay.style.background = "red";
playbyplay.style.color = "white";
playbyplay.style.marginTop = '100px'
playbyplay.style.textAlign ='center';
playbyplay.style.whiteSpace = 'pre'



const container = document.querySelector('.container')

container.appendChild(playbyplay);
container.appendChild(results);




