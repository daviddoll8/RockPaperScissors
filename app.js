let playerWins = 0;
let computerWins = 0;

function initEvents(){
    let buttons = document.querySelectorAll(".playBtn");
    let replayButton = document.querySelector(".replayBtn");

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let computerSelection = getComputerChoice();
            let playerSelection = e.target.closest('button').id;
            let roundResult = playRound(playerSelection, computerSelection);
            updateRoundResults(roundResult, playerSelection, computerSelection);
        });
    });

    replayButton.addEventListener("click", (e) => {
        restartGame();
    });
}

function updateRoundResults(roundResult, playerSelection, computerSelection){
    let matchInfo = document.querySelector(".match-info-text");
    matchInfo.style.display = "block";
    matchInfo.textContent = roundResult;
    let matchResult = roundResult.substring(0, 8);
    let computerImagePath = "images/" + computerSelection + ".gif";
    let playerImagePath =  "images/" + playerSelection + ".gif";
    let computerImage = document.querySelector(".computer-selection .selection-img");
    let playerImage = document.querySelector(".player-selection .selection-img");
    computerImage.style.display = "block";
    playerImage.style.display = "block";
    computerImage.src = computerImagePath;
    playerImage.src = playerImagePath;
    switch (matchResult) {
        case "You Win!":
            playerWins++;
            let playerScore = document.querySelector(".player-score span");
            playerScore.textContent = playerWins;
            break;
        case "You Lose":
            computerWins++;
            let computerScore = document.querySelector(".computer-score span");
            computerScore.textContent = computerWins;
            break;
        default:
            break;
    }
    if(playerWins === 3 || computerWins === 3){
        endGame(playerWins, computerWins);
    }
}

function endGame(playerWins, computerWins){
    console.log("here");
    let btnMsgHeader = document.querySelector(".player-msg");
    let playButtons = document.getElementsByClassName("playBtn");
    let replayButton = document.querySelector(".replayBtn");
    for(let i = 0; i < playButtons.length; i++){
        playButtons[i].style.display = "none";
        console.log(playButtons[i]);
    }
    replayButton.style.display = "block";
    console.log("here");
    console.log("here");
    if(playerWins > computerWins) {
        btnMsgHeader.textContent = "You won the best of 5! Would you like to play again?";
    }else{
        btnMsgHeader.textContent = "You lost the best of 5! Would you like to play again?";
    }
}

function restartGame() {
    playerWins = 0;
    computerWins = 0;
    let playerScore = document.querySelector(".player-score span");
    let computerScore = document.querySelector(".computer-score span");
    let replayBtn = document.querySelector(".replayBtn");
    let playButtons = document.querySelectorAll(".playBtn");
    let matchInfo = document.querySelector(".match-info-text");
    let selectionImages = document.querySelectorAll(".selection-img");
    let playerMsg = document.querySelector(".player-msg");
    playerMsg.textContent = "Select one for the next round";
    selectionImages.forEach((image) => {
        image.style.display = "none";
    });
    matchInfo.style.display = "none";
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    replayBtn.style.display = "none";
    playButtons.forEach((button) => {
        button.style.display = "block";
    });
}

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * (3));

    switch (computerSelection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Out of Range";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        switch (computerSelection) {
            case "rock":
                return "Tie Match! You both chose Rock.";
            case "paper":
                return "You Lose! Paper beats Rock.";
            case "scissors":
                return "You Win! Rock beats Scissors.";
            default:
                return "invalid computer selection";
        }
    }else if(playerSelection === "paper"){
        switch (computerSelection) {
            case "rock":
                return "You Win! Paper beats Rock.";
            case "paper":
                return "Tie Match! You both chose Paper.";
            case "scissors":
                return "You Lose! Scissors beats Paper.";
            default:
                return "invalid computer selection";
        }
    }else if(playerSelection === "scissors"){
        switch (computerSelection) {
            case "rock":
                return "You Lose! Rock beats Scissors.";
            case "paper":
                return "You Win! Scissors beats Paper.";
            case "scissors":
                return "Tie Match! You both chose Scissors.";
            default:
                return "invalid computer selection";
        }
    }
    return "invalid player selection";
}

function generateGameOutcome(playerWins, computerWins, tieRounds){
    let matchStats = "Player Wins: " + playerWins + " Computer Wins: " + computerWins + " Tie Rounds in Match: " + tieRounds;
    if(playerWins > computerWins){
        return "You Win the Best of 5! \n" + matchStats;
    }else{
        return "You Lost the Best of 5! \n" + matchStats;
    }
}

initEvents();


