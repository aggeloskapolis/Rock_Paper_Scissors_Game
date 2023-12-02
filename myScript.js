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




//calls for every function!

//getComputerChoice();
//playersChoice();
play();
