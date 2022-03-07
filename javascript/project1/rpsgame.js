const options = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let index = Math.floor(Math.random() * options.length);
    return options.at(index);
}

function firstToUpperCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    if (playerSelection == "rock" && playerSelection != computerSelection){
        if (computerSelection == "scissors"){
            playerSelection = firstToUpperCase(playerSelection);
            return "You win! " + playerSelection + " beats " + computerSelection;
        }
        else if (computerSelection == "paper"){
            computerSelection = firstToUpperCase(computerSelection);
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }

    else if (playerSelection == "paper" && playerSelection != computerSelection){
        if (computerSelection == "rock"){
            playerSelection = firstToUpperCase(playerSelection);
            return "You win! " + playerSelection + " beats " + computerSelection;
        }
        else if (computerSelection == "scissors"){
            computerSelection = firstToUpperCase(computerSelection);
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }

    else if (playerSelection == "scissors" && playerSelection != computerSelection){
        if (computerSelection == "paper"){
            playerSelection = firstToUpperCase(playerSelection);
            return "You win! " + playerSelection + " beats " + computerSelection;
        }
        else if (computerSelection == "rock"){
            computerSelection = firstToUpperCase(computerSelection);
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }

    else if (playerSelection == computerSelection){
        return "This is tied! Both of you chose " + playerSelection;
    }

    else{
        return "Player selection is undefined"
    }
}

function game(){

    let wantToPlay = prompt("Wanna play rock, paper, scissors?");
    wantToPlay = wantToPlay.toLowerCase().replace(/\s+/g, ' ').trim();

    while (wantToPlay != "yes" && wantToPlay != "no"){
        wantToPlay = prompt("Please enter a valid option. Wanna play? Yes or no?");
        console.log(wantToPlay)
    }

    if (wantToPlay == "yes"){
        let playerSelection;
        let computerSelection;
        let count_win = 0;
        let result; 
        let totalRounds = 5;

        console.log("Welcome to the game my friend");
        for (let i = 0; i < totalRounds; i++) {
            playerSelection = prompt("Please select an option (rock, paper, scissors)");
            computerSelection = computerPlay();
            result = playRound(playerSelection, computerSelection);
            console.log(result);    
            if (result.includes("win")){
                count_win++;
            }
        }
        console.log(playRound(playerSelection, computerSelection));        
        if (count_win / totalRounds > 0.5){
            console.log("You have won!! Thanks for playing");
        }
        else if (count_win / totalRounds < 0.5){
            console.log("You have lose!! Thanks for playing anyway")
        }

    }
    else{
        console.log("It is a shame, you lost a good moment");
    }

}