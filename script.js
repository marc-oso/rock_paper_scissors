function Computer(CompChoice) {
    let randomChoice = Math.floor(Math.random() * 3)
    if 
        (randomChoice == 0) 
        {CompChoice.Value = "rock"}
    
    else if 
        (randomChoice == 1)
        {CompChoice.Value = 'paper'}
    
    else if 
    (randomChoice == 2)
    {CompChoice.Value = 'scissors'}

    console.log(randomChoice)
    return randomChoice
}

function playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice) {
    let win_array = [[0,2,1], [1,0,2], [2,1,0]];
let result = win_array[playerChoiceInt] [compChoiceInt];

    if (result == 0) {
        console.log(`It's a tie! You chose ${playerChoice} and the computer chose ${compChoice.Value}`)
    }
    else if (result == 1) {
        console.log(`You won! You chose ${playerChoice} and the computer chose ${compChoice.Value}`)
    }
    else if (result == 2) {
        console.log(`You lost! You chose ${playerChoice} and the computer chose ${compChoice.Value}`)
    }
}

function game() {
    let compChoice = {Value:""}
    let compChoiceInt;
    let playerChoiceInt;
    let playerChoice;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase()

        if (playerChoice == 'rock') {
            playerChoiceInt = 0
        }
        else if (playerChoice == 'paper') {
            playerChoiceInt = 1
        }
        else if (playerChoice == 'scissors') {
            playerChoiceInt = 2
        }
        compChoiceInt = Computer(compChoice)
        playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice)
    }
}

console.log(game())
