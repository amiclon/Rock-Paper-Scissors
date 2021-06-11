
const rpsAnswer = ['Rock','Paper','Scissors']
let computerSelection;
let playerSelection = 'Rock';
let computerScore = 0;
let playerScore = 0;
let win
let lose

function computerPlay() {
return rpsAnswer[Math.floor(Math.random()*rpsAnswer.length)]
} 

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    if (computerSelection == playerSelection) {
        return "Tie game!"
    } else if (
        computerSelection == "rock" && playerSelection == "scissors" ||
        computerSelection == "scissors" && playerSelection == "paper" ||
        computerSelection == "paper" && playerSelection == "rock"
    )   {return "You lost!"}
    else if (
        computerSelection == "scissors" && playerSelection == "rock" ||
        computerSelection == "paper" && playerSelection == "scissors" ||
        computerSelection == "rock" && playerSelection == "paper"
    )   {return "You won!"}
}

function game() {
    playRound(playerSelection, computerSelection)
    if (playRound("Tie game"))
    if (playRound("You lost!")) {
        ++computerScore
    }
    if (playRound("You won!")) {
        ++playerScore
    }


}

console.log(playRound(playerSelection, computerSelection))