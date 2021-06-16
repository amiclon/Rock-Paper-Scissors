const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const ROCK_PAPER_SCISSORS_LIST = [ROCK, PAPER, SCISSORS];

let computerScore = 0;
let playerScore = 0;

const getRandomNumber = ({ min = 0, max = 2 } = {}) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomRockPaperScissors = () => {
  const myRandomNumber = getRandomNumber();
  return ROCK_PAPER_SCISSORS_LIST[myRandomNumber];
};

const didPlayerWin = ({ playerChoice, computerChoice } = {}) => {
  if (!playerChoice) throw Error("playerChoice was undefined");
  if (!computerChoice) throw Error("computerChoice was undefined");

  const lowerCasePlayerChoice = playerChoice.toLowerCase();
  const lowerCaseComputerChoice = computerChoice.toLowerCase();

  if (lowerCasePlayerChoice === lowerCaseComputerChoice) {
    return "Tie game!";
  }

  if (
    lowerCasePlayerChoice === ROCK.toLowerCase() &&
    lowerCaseComputerChoice === SCISSORS.toLowerCase()
  ) {
    return true;
  }

  if (
    lowerCasePlayerChoice === SCISSORS.toLowerCase() &&
    lowerCaseComputerChoice === PAPER.toLowerCase()
  ) {
    return true;
  }

  if (
    lowerCasePlayerChoice === PAPER.toLowerCase() &&
    lowerCaseComputerChoice === ROCK.toLowerCase()
  ) {
    return true;
  }

  return false;
};

for (let turn = 1; turn <= 100; turn++) {
  const playerChoice = getRandomRockPaperScissors();
  const computerChoice = getRandomRockPaperScissors();

  const isPlayerVictorious = didPlayerWin({
    playerChoice,
    computerChoice,
  });

  if (isPlayerVictorious === true) {
    playerScore = playerScore + 1;
  }

  if (isPlayerVictorious === false) {
    computerScore = computerScore + 1;
  }

  console.log("the turn is", turn);
  console.log("playerChoice is", playerChoice);
  console.log("computerChoice is", computerChoice);
  console.log("did the player win?", isPlayerVictorious);
}

console.log("Final Score for Computer", computerScore);
console.log("Final Score for Player", playerScore);

module.exports = {
  didPlayerWin,
};
