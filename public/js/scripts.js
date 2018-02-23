var select = document.querySelector('select');
var button = document.querySelector('button');

var options = ['rock', 'paper', 'scissors'];

//            window.onload = getPlayerChoice();
//            window.onload = getComputerChoice();
select.addEventListener('input', function(ev) {
    // doesn't change on state change
    // getElText(select);
    
    // need to find a way to change on state change, not just on input select
    // console.log(ev.target);
});
button.addEventListener('click', playGame);

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

function getElText(element) {
    var elt = document.querySelector('select');

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}

console.log(getElText(select));