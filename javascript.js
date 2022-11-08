let playerWins = 0;
let computerWins = 0;
const resultsDiv = document.querySelector('#results');
let displayScore = document.querySelector("#displayScore");
let gameOver = false;

const rock =  document.querySelector('#rock');
console.log(rock);
rock.addEventListener('click', playRock);

function playRock(){
    let results = playRound(getComputerChoice(), "Rock");
    resultsDiv.textContent = results;
    console.log(results);
};

const paper =  document.querySelector('#paper');
console.log(paper);
paper.addEventListener('click', playPaper);

function playPaper(){
    let results = playRound(getComputerChoice(), "Paper");
    console.log(results);
    resultsDiv.textContent = results;
};

const scissors =  document.querySelector('#scissors');
console.log(scissors);
scissors.addEventListener('click', playScissors);

function playScissors(){
    let results = playRound(getComputerChoice(), "Scissors");
    console.log(results);
    resultsDiv.textContent = results;
};

const reset = document.querySelector('#newGame');
reset.addEventListener('click', newGame);


function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    if (num === 0){
        return "Rock";
    }
    else if (num === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function updateScore(){
    displayScore.textContent = playerWins + "-" + computerWins;
}

function newGame(){
    playerWins = 0;
    computerWins = 0;
    updateScore();
    resultsDiv.textContent = "Lets play a new game!";
    gameOver = false;
}

function computerWon(){
    computerWins ++;
    if(computerWins == 5){
        displayScore.textContent = "The AI has bested you!";
        gameOver = true;
        return true;
    }
    return false;
}

function playerWon(){
    playerWins ++;
    if(playerWins == 5){
        displayScore.textContent = "You dominated the AI!";
        gameOver = true;
        return true;
    }
    return false;
}

function playRound(computerSelection, playerSelection){
    if(gameOver){
        return "Please Start A New Game";
    }
    if (playerSelection === computerSelection){
        return "You and the computer picked the same!"
    }
    else if (playerSelection === "Rock"){
        if(computerSelection === "Paper"){
            if(computerWon() == true){return "GAME OVER!"};
            updateScore();
            return ("You Lose! " + computerSelection + " beats " + playerSelection + "."); 
        }
        else{
            if(playerWon()){return "YOU'VE WON!"}
            updateScore();
            return ("You Win! " + playerSelection + " beats " + computerSelection + ".");
        }
    }
    else if (playerSelection === "Paper"){
        if(computerSelection === "Scissors"){
            if(computerWon() == true){return "GAME OVER!"};
            updateScore();
            return ("You Lose! " + computerSelection + " beats " + playerSelection + "."); 
        }
        else{
            if(playerWon()){return "YOU'VE WON!"}
            updateScore();
            return ("You Win! " + playerSelection + " beats " + computerSelection + ".");
        }
    }
    else if (playerSelection == "Scissors"){
        if(computerSelection === "Rock"){
            if(computerWon() == true){return "GAME OVER!"};
            updateScore();
            return ("You Lose! " + computerSelection + " beats " + playerSelection + "."); 
        }
        else{
            if(playerWon()){return "YOU'VE WON!"}
            updateScore();
            return ("You Win! " + playerSelection + " beats " + computerSelection + ".");
        }
    }
    else {
        return "Something went wrong! Yell at whoever made this!"
    }

}
