const resultsDiv = document.querySelector('#results');

const rock =  document.querySelector('#rock');
console.log(rock);
const rockChoice = "Rock";
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

function getPlayerChoice(){
    let playerSelection = prompt("Rock, Paper, Scissors?", "Enter Choice");
    playerSelection = capitalizeFirstLetter(playerSelection);
    return playerSelection;
}


function playRound(computerSelection, playerSelection){
    if (playerSelection === computerSelection){
        return "You Tied!"
    }
    else if (playerSelection === "Rock"){
        if(computerSelection === "Paper"){
            return ("You lose " + computerSelection + " beats " + playerSelection); 
        }
        else{
            return ("You Win! " + playerSelection + " beats " + computerSelection);
        }
    }
    else if (playerSelection === "Paper"){
        if(computerSelection === "Scissors"){
            return ("You lose " + computerSelection + " beats " + playerSelection); 
        }
        else{
            return ("You Win! " + playerSelection + " beats " + computerSelection);
        }
    }
    else if (playerSelection == "Scissors"){
        if(computerSelection === "Rock"){
            return ("You lose " + computerSelection + " beats " + playerSelection); 
        }
        else{
            return ("You Win! " + playerSelection + " beats " + computerSelection);
        }
    }
    else {
        return "You didn't pick a valid choice."
    }


}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

