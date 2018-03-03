// content that remains constant
const options = ['rock', 'paper', 'scissors'];
// content that will get eventlisteners
const select = document.querySelector('select');
const playBtn = document.querySelector('.play-btn');
const resetBtn = document.querySelector('.reset-btn');
// content that will be updated
let playerText = document.querySelector('.player-score');
let computerText = document.querySelector('.computer-score');
let playerScore = parseInt(playerText.textContent);
let computerScore = parseInt(computerText.textContent);
let header = document.querySelector('h1');


let computerChoice = 'rock';
let playerChoice = select.options[select.selectedIndex].textContent.toLowerCase();


// change player's choice on selection
select.addEventListener('input', getPlayerChoice);

// play game on button click
playBtn.addEventListener('click', playGame);

// reset game on button click
resetBtn.addEventListener('click', resetGame);


function getPlayerChoice() {
    playerChoice = select.options[select.selectedIndex].textContent.toLowerCase();
}

function getComputerChoice() {
    var randNum = Math.floor(Math.random() * 3);
    computerChoice = options[randNum];

    return computerChoice;
}

function resetGame() {
    header.textContent = 'Rock, Paper, Scissors';
    playerScore = 0;
    computerScore = 0;
    playerText.textContent = '0';
    computerText.textContent = '0';
}

// TODO: condense playGame func
// TODO: do something instead of console.logging

function playGame() {
    computerChoice = getComputerChoice();
    var winner = getResult(computerChoice, playerChoice);

    console.log({
        playerChoice,
        computerChoice,
        winner
    });
    
    updateScore(winner);
}

function getResult(comp, player) {
    var result = '';

    if (player === 'rock') {
        if (comp === 'rock') {
            result = 'tie';
        } else if (comp === 'paper') {
            result = 'computer';
        } else {
            result = 'player';
        }
    } else if (player === 'paper') {
        if (comp === 'paper') {
            result = 'tie';
        } else if (comp === 'scissors') {
            result = 'computer';
        } else {
            result = 'player';
        }
    } else {
        if (comp === 'scissors') {
            result = 'tie';
        } else if (computer === 'rock') {
            result = 'computer';
        } else {
            result = 'player';
        }
    }

    return result;
}

function updateScore(winner) {
    if (winner === 'computer') {
        computerScore++;
        computerText.textContent = computerScore;
        header.textContent = 'Computer Wins';
    } else if (winner === 'player') {
        playerScore++;
        playerText.textContent = playerScore;
        header.textContent = 'Player Wins!';
    } else {
        header.textContent = 'Tie game';
    }
}

// TODO: create game(), a function to play 5 rounds and keeps track of the scores
