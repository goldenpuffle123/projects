function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3);
    switch(compChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter choice (rock, paper, scissors): ").toLowerCase();
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    let winner;
    if(computerChoice=="rock" && humanChoice=="paper") winner = 1;
    else if(computerChoice=="paper" && humanChoice=="rock") winner = 0;
    else if(computerChoice=="paper" && humanChoice=="scissors") winner = 1;
    else if(computerChoice=="scissors" && humanChoice=="paper") winner = 0;
    else if(computerChoice=="rock" && humanChoice=="scissors") winner = 0;
    else if(computerChoice=="scissors" && humanChoice=="rock") winner = 1;
    else if(computerChoice == humanChoice) winner = 2;
    else return alert("Error");

    if(winner == 0) {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if(winner == 1) {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        console.log(`Tie, ${computerChoice} and ${humanChoice}`);
    }

}

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(computerSelection, humanSelection);