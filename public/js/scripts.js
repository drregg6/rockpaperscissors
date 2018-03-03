// content that remains constant
const options = ['rock', 'paper', 'scissors'];
// content that will get eventlisteners
const select = document.querySelector('select');
const playBtn = document.querySelector('.play-btn');
const resetBtn = document.querySelector('.reset-btn');
// content that will be updated
let playerScore = parseInt(document.querySelector('.player-score').textContent);
let computerScore = parseInt(document.querySelector('.computer-score').textContent);


let computer = 'rock';
let player = select.options[select.selectedIndex].textContent.toLowerCase();


// change player's choice on selection
select.addEventListener('input', getPlayerChoice);

// play game on button click
//playBtn.addEventListener('click', playGame);

// reset game on button click
//resetBtn.addEventListener('click', resetGame);


function getPlayerChoice() {
    player = select.options[select.selectedIndex].textContent.toLowerCase();
}

function getComputerChoice() {
    var randNum = Math.floor(Math.random() * 3);
    computer = options[randNum];
    
    return computer;
}

// TODO: condense playGame func
// TODO: do something instead of console.logging

function playGame() {
    computer = getComputerChoice();
    
    console.log({
        player,
        computer
    });

    if (player === 'rock') {
        if (computer === 'rock') {
            console.log('Tie game!');
        } else if (computer === 'paper') {
            console.log('Computer wins...');
        } else {
            console.log('Congratulations, you win!');
        }
    } else if (player === 'paper') {
        if (computer === 'paper') {
            console.log('Tie game!');
        } else if (computer === 'scissors') {
            console.log('Computer wins...');
        } else {
            console.log('Congratulations, you win!');
        }
    } else {
        if (computer === 'scissors') {
            console.log('Tie game!');
        } else if (computer === 'rock') {
            console.log('Computer wins...');
        } else {
            console.log('Congratulations, you win!');
        }
    }
}

// TODO: create game(), a function to play 5 rounds and keeps track of the scores


//function getElText(element) {
//    var elt = document.querySelector('select');
//
//    if (elt.selectedIndex == -1)
//        return null;
//
//    return elt.options[elt.selectedIndex].text;
//}
//
//console.log(getElText(select));