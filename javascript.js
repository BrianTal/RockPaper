//runs game 5 times
function game(){
    for(let i=0; i<5; i++){
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
    }
}

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


game();