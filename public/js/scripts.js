// content that remains constant
const options = ['rock', 'paper', 'scissors'];
// content that will get eventlisteners
const select = document.querySelector('select');
const playBtn = document.querySelector('.play-btn');
const resetBtn = document.querySelector('.reset-btn');
// content that will be updated
let playerScore = parseInt(document.querySelector('.player-score').textContent);
let computerScore = parseInt(document.querySelector('.computer-score').textContent);


let computerChoice = 'rock';
let playerChoice = select.options[select.selectedIndex].textContent.toLowerCase();


// change player's choice on selection
select.addEventListener('input', getPlayerChoice);

// play game on button click
playBtn.addEventListener('click', playGame);

// reset game on button click
//resetBtn.addEventListener('click', resetGame);


function getPlayerChoice() {
    playerChoice = select.options[select.selectedIndex].textContent.toLowerCase();
}

function getComputerChoice() {
    var randNum = Math.floor(Math.random() * 3);
    computerChoice = options[randNum];
    
    return computerChoice;
}

// TODO: condense playGame func
// TODO: do something instead of console.logging

function playGame() {
    computerChoice = getComputerChoice();
    
    console.log({
        playerChoice,
        computerChoice
    });
    
    console.log(getWinner(computerChoice, playerChoice));
}

function getWinner(comp, player){
    var winner = '';
    
    if (player === 'rock') {
        if (comp === 'rock') {
            winner = 'tie';
        } else if (comp === 'paper') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else if (player === 'paper') {
        if (comp === 'paper') {
            winner = 'tie';
        } else if (comp === 'scissors') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else {
        if (comp === 'scissors') {
            winner = 'tie';
        } else if (computer === 'rock') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    
    return winner;
}

// TODO: create game(), a function to play 5 rounds and keeps track of the scores