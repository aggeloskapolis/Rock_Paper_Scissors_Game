//function that takes the computer choice!
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choice.length);
    console.log(choice[random]);
    return (choice[random]);
}

//function that takes the player's choice!
function playersChoice() {
    let choice_made = 0;
    while (choice_made == 0) {
        let choise = prompt('Give your choice :Rock , Paper , Scissors', '');
        choise = choise.toLowerCase();
        if (choise == 'rock' || choise == 'paper' || choise == 'scissors') {
            choice_made += 1;
            return choise;
        } else {
            alert('The value you choose dont exists. Try again');
        }
    }
}


//function that implements the game of Rock Paper Scissors!
function play(computerSelection = getComputerChoice(), playersSelection = playersChoice()) {

    //return values in order to know every time who won the game!
    const tie = 0;
    const computerWonNumber = 1;
    const playersWonNumber = 2;

    if (computerSelection != playersSelection) {
        if (computerSelection == 'rock') {

            if (playersSelection == 'paper') {

                alert('You Won! Paper beats Rock!!');
                return playersWonNumber;

            } else {

                alert('You Lose! Rock beats Scissors');
                return computerWonNumber;

            }

        } else if (computerSelection == 'paper') {

            if (playersSelection == 'rock') {

                alert('You Lose! Paper beats Rock');
                return computerWonNumber;

            } else {

                alert('You Won! Scissors beats Paper');
                return playersWonNumber;

            }

        } else {

            if (playersSelection == 'paper') {
                alert('You Lose! Scissors beats Paper');
                return computerWonNumber;
            } else {
                alert('You Won! Rock beats Scissors');
                return playersWonNumber;
            }
        }

    } else {
        alert("It's a tie");
        return tie;
    }
}


//function that impliments a 5-round Rock Paper Scissors game!
function fiveRoundGame() {

    let Computer = 0;
    let player = 0;
    let tie = 0;

    for (i = 0; i < 5; i++) {
        value = play();
        if (value == 0) {
            tie += 1;
        } else if (value == 1) {
            Computer += 1;
        } else {
            player += 1;
        }

    }

    if (Computer > 2) {
        alert("Game Done!! Computer Won!!");
    } else if (player > 2) {
        alert("Game Done!! You Won!!");
    } else {
        alert("Game Done!! it's a Tie!!");
    }
}


//function that impliments a 5-round Rock Paper Scissors game!
function fiveRoundGame() {

    let Computer = 0;
    let player = 0;
    let tie = 0;

    for (i = 0; i < 5; i++) {
        value = play();
        if (value == 0) {
            tie += 1;
        } else if (value == 1) {
            Computer += 1;
        } else {
            player += 1;
        }

    }

    if (Computer > 2) {
        alert("Game Done!! Computer Won!!");
    } else if (player > 2) {
        alert("Game Done!! You Won!!");
    } else {
        alert("Game Done!! it's a Tie!!");
    }
}


//calls for every function!

//getComputerChoice();
//playersChoice();
//play();
fiveRoundGame();