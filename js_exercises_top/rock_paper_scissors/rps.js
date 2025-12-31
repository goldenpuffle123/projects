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

function playRound() {
    // Encoding: computer: 0, user: 1, tie: 2
    computerChoice = getComputerChoice();
    console.log(computerChoice, humanChoice)
    let winner;
    if(computerChoice=="rock" && humanChoice=="paper") winner = 1;
    else if(computerChoice=="paper" && humanChoice=="rock") winner = 0;
    else if(computerChoice=="paper" && humanChoice=="scissors") winner = 1;
    else if(computerChoice=="scissors" && humanChoice=="paper") winner = 0;
    else if(computerChoice=="rock" && humanChoice=="scissors") winner = 0;
    else if(computerChoice=="scissors" && humanChoice=="rock") winner = 1;
    else if(computerChoice == humanChoice) winner = 2;
    else return alert("Error");

    updateWin(winner);

}

function updateWin(winner) {
    const winnerText = document.querySelector("[data-winner]");
    const userScoreText = document.querySelector("[data-user-score]");
    const computerScoreText = document.querySelector("[data-computer-score]");
    if(winner == 0) {
        winnerText.textContent = "COMPUTER"
        computerScore++;
    }
    else if(winner == 1) {
        winnerText.textContent = "USER"
        humanScore++;
    }
    else {
        winnerText.textContent = "TIE"
    }
    userScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    nextButton.disabled = false;
    

}

const rpsButtons = document.querySelector("#buttons");
const nextButton = document.querySelector("#next");

let humanScore = 0;
let computerScore = 0;

nextButton.disabled = true;
let computerChoice;
let humanChoice;

rpsButtons.addEventListener("click", (event) => {
    target = event.target;
    humanChoice=target.id;
    target.style["border-color"] = "hsl(300, 100%, 35%)";
    if (nextButton.disabled) playRound();
});

nextButton.addEventListener( "click",
    () => {
        document.querySelectorAll("#buttons>button").forEach((btn) => btn.style["border-color"] = "gray"); // remove effect
        nextButton.disabled = true;
    }
)