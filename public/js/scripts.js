// TODO: get the border color to change upon win
// TODO: change the select to three more buttons
//              it makes user selection much easier

// content that remains constant
const options = ['Rock', 'Paper', 'Scissors'];

// content that will get eventlisteners
const select = document.querySelector('select');
const playBtn = document.querySelector('.play-btn');
const resetBtn = document.querySelector('.reset-btn');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

// content that will be updated
let playerText = document.querySelector('.player-score');
let computerText = document.querySelector('.computer-score');
let playerScore = parseInt(playerText.textContent);
let computerScore = parseInt(computerText.textContent);
let header = document.querySelector('h1');

// main variables
let computerChoice = 'rock';
//let playerChoice = 'select.options[select.selectedIndex].textContent';
let playerChoice = 'rock';


// change player's choice on selection
//select.addEventListener('input', getPlayerChoice);
rockBtn.addEventListener('click', function() {
    playerChoice = 'Rock';
    header.textContent = 'You\'re playing Rock';
});
paperBtn.addEventListener('click', function() {
    playerChoice = 'Paper';
    header.textContent = 'You\'re playing Paper';
});
scissorsBtn.addEventListener('click', function() {
    playerChoice = 'Scissors';
    header.textContent = 'You\'re playing Scissors';
});

// play game on button click
playBtn.addEventListener('click', playGame);

// reset game on button click
resetBtn.addEventListener('click', resetGame);



//function getPlayerChoice() {
//    playerChoice = select.options[select.selectedIndex].textContent.toLowerCase();
//}

function getComputerChoice() {
    var randNum = Math.floor(Math.random() * 3);
    computerChoice = options[randNum];

    return computerChoice;
}

function resetGame() {
    playBtn.disabled = false;
    playBtn.classList.remove('hidden');
    computerText.classList.remove('computer-wins');
    playerText.classList.remove('player-wins');
    header.classList.remove('player-wins', 'computer-wins');
    
    header.textContent = 'Rock, Paper, Scissors';
    playerScore = 0;
    computerScore = 0;
    playerText.textContent = '0';
    computerText.textContent = '0';
}



function playGame() {
    computerChoice = getComputerChoice();
    var winner = getResult(computerChoice, playerChoice);
    
    if (computerScore === 5 || playerScore === 5) {
        updateGameOver(winner);
    } else {
        updateScore(winner);
    }
    console.log({
        playerChoice,
        computerChoice,
        winner
    });
}

function getResult(comp, player) {
    var result = '';

    if (player === 'Rock') {
        if (comp === 'Rock') {
            header.textContent = `${player} ties ${comp}`;
            result = 'tie';
        } else if (comp === 'Paper') {
            header.textContent = `${player} loses to ${comp}`;
            computerScore++;
            result = 'computer';
        } else {
            header.textContent = `${player} beats ${comp}`;
            playerScore++;
            result = 'player';
        }
    } else if (player === 'Paper') {
        if (comp === 'Paper') {
            header.textContent = `${player} ties ${comp}`;
            result = 'tie';
        } else if (comp === 'Scissors') {
            header.textContent = `${player} loses to ${comp}`;
            computerScore++;
            result = 'computer';
        } else {
            header.textContent = `${player} beats ${comp}`;
            playerScore++;
            result = 'player';
        }
    } else {
        if (comp === 'Scissors') {
            header.textContent = `${player} ties ${comp}`;
            result = 'tie';
        } else if (comp === 'Rock') {
            header.textContent = `${player} loses to ${comp}`;
            computerScore++;
            result = 'computer';
        } else {
            header.textContent = `${player} beats ${comp}`;
            playerScore++;
            result = 'player';
        }
    }

    return result;
}

function updateScore(winner) {
    if (winner === 'computer') {
        computerText.textContent = computerScore;
        // somehow add 'playerChoice' loses against 'computerChoice'
    } else if (winner === 'player') {
        playerText.textContent = playerScore;
        // somehow add 'playerChoice' beats 'computerChoice'
    } else {
        header.textContent = 'Tie game';
    }
}

function updateGameOver(winner) {
    if (winner === 'player') {
        playerText.textContent = playerScore;
        playerText.classList.add('player-wins');
        header.textContent = 'Congratulations! You Win!';
        header.classList.add('player-wins')
    } else {
        computerText.textContent = computerScore;
        computerText.classList.add('computer-wins');
        header.textContent = 'Game Over... Computer Wins';
        header.classList.add('computer-wins');
    }
    playBtn.classList.add('hidden');
    playBtn.disabled = true;
}