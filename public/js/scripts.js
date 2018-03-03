var select = document.querySelector('select');
var playBtn = document.querySelector('.play-btn');
var resetBtn = document.querySelector('.reset-btn');

var playerScore = 0;
var computerScore = 0;

var options = ['rock', 'paper', 'scissors'];



// change player's choice on selection
select.addEventListener('input', playerChoice);

// play game on button click
playBtn.addEventListener('click', playGame);

// reset game on button click
resetBtn.addEventListener('click', resetGame);



function getPlayerChoice() {
    var choice = prompt('Choose an option!').toLowerCase();

    switch (choice) {
        case 'rock':
            return 'rock';
            console.log('You chose "rock"');
            break;
        case 'scissors':
            return 'scissors';
            console.log('You chose "scissors"');
            break;
        case 'paper':
            return 'paper';
            console.log('You chose "paper"');
            break;
        default:
            getPlayerChoice();
    }

    return choice;

}

function getComputerChoice() {
    var randNum = Math.floor(Math.random() * 3);
    var compChoice = options[randNum];
    //                console.log(compChoice);

    return compChoice;
}

// TODO: condense playGame func
// TODO: do something instead of console.logging

function playGame() {
    var player = getPlayerChoice();
    var computer = getComputerChoice();

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