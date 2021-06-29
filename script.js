let body = document.querySelector("body");
let containerDiv = document.querySelector("#container");
containerDiv.classList.add("container");
let playerName;
let playerChoice;
let playerScore = 0;
let pcScore = 0;
let playerAvatar;
/*ACTUAL GAME--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let theGame = (c) => {

    let getRandomNumber = () => {
        return Math.floor((Math.random() * 3) + 1);
    }

    let getComputerChoice = a => {
        a = getRandomNumber();
            if (a == 1) {
                return "rock"
            } else if (a == 2) {
                return "paper"
            } else {
                return "scissors"
            }
    }
    let computerPlay = getComputerChoice();
    
    b = computerPlay;

    if (b === "rock" && c === "scissors") {
    
        let alertMessage = document.createElement("p");
        alertMessage.classList.add("resultAlert");
        alertMessage.innerText = "You choose "+ c + " and computer "+b+ "\nIt\'s a point for the evil PC!!!";
        toBattleScreen.appendChild(alertMessage);

        let remove = () =>{
            toBattleScreen.removeChild(alertMessage);
        }

        let alertMessageButton = document.createElement("button");
        alertMessageButton.classList.add("resultAlertButton");
        alertMessageButton.addEventListener("click", remove, false);
        alertMessageButton.innerText = "go!";
        alertMessage.appendChild(alertMessageButton);

        
        pcScore += 1;
        keepScore();
        winner();
    }
    else if (b === "rock" && c === "paper") {
    
        let alertMessage = document.createElement("p");
        alertMessage.classList.add("resultAlert");
        alertMessage.innerText = "You choose "+ c + " and computer "+b+ "\nIt\'s a point for you!!!";
        toBattleScreen.appendChild(alertMessage);

        let remove = () =>{
            toBattleScreen.removeChild(alertMessage);
        }

        let alertMessageButton = document.createElement("button");
        alertMessageButton.classList.add("resultAlertButton");
        alertMessageButton.addEventListener("click", remove, false);
        alertMessageButton.innerText = "go!";
        alertMessage.appendChild(alertMessageButton);

        
        playerScore += 1;
        keepScore();
        winner();
    }
    else if (b === "paper" && c === "scissors") {
    
        let alertMessage = document.createElement("p");
        alertMessage.classList.add("resultAlert");
        alertMessage.innerText = "You choose "+ c + " and computer "+b+ "\nIt\'s a point for you!!!";
        toBattleScreen.appendChild(alertMessage);

        let remove = () =>{
            toBattleScreen.removeChild(alertMessage);
        }

        let alertMessageButton = document.createElement("button");
        alertMessageButton.classList.add("resultAlertButton");
        alertMessageButton.addEventListener("click", remove, false);
        alertMessageButton.innerText = "go!";
        alertMessage.appendChild(alertMessageButton);

        
        playerScore += 1;
        keepScore();
        winner();
    }
    else if (b === "paper" && c === "rock") {
    
        let alertMessage = document.createElement("p");
        alertMessage.classList.add("resultAlert");
        alertMessage.innerText = "You choose "+ c + " and computer "+b+ "\nIt\'s a point for the evil PC!!!";
        toBattleScreen.appendChild(alertMessage);

        let remove = () =>{
            toBattleScreen.removeChild(alertMessage);
        }

        let alertMessageButton = document.createElement("button");
        alertMessageButton.classList.add("resultAlertButton");
        alertMessageButton.addEventListener("click", remove, false);
        alertMessageButton.innerText = "go!";
        alertMessage.appendChild(alertMessageButton);

        
        pcScore += 1;
        keepScore();
        winner();
    }
    else if (b === "scissors" && c === "rock") {
    
        let alertMessage = document.createElement("p");
        alertMessage.classList.add("resultAlert");
        alertMessage.innerText = "You choose "+ c + " and computer "+b+ "\nIt\'s a point for you!!!";
        toBattleScreen.appendChild(alertMessage);

        let remove = () =>{
            toBattleScreen.removeChild(alertMessage);
        }

        let alertMessageButton = document.createElement("button");
        alertMessageButton.classList.add("resultAlertButton");
        alertMessageButton.addEventListener("click", remove, false);
        alertMessageButton.innerText = "go!";
        alertMessage.appendChild(alertMessageButton);

        
        playerScore += 1;
        keepScore();
        winner();
    }
    else if (b === "scissors" && c === "paper") {
    
        let alertMessage = document.createElement("p");
        alertMessage.classList.add("resultAlert");
        alertMessage.innerText = "You choose "+ c + " and computer "+b+ "\nIt\'s a point for the evil PC!!!";
        toBattleScreen.appendChild(alertMessage);

        let remove = () =>{
            toBattleScreen.removeChild(alertMessage);
        }

        let alertMessageButton = document.createElement("button");
        alertMessageButton.classList.add("resultAlertButton");
        alertMessageButton.addEventListener("click", remove, false);
        alertMessageButton.innerText = "go!";
        alertMessage.appendChild(alertMessageButton);

        pcScore += 1;
        keepScore();
        winner();
    }
    else {

        let alertMessage = document.createElement("p");
        alertMessage.classList.add("resultAlert");
        alertMessage.innerText = "You choose "+ c + " and computer too! \nIt\'s a draw!!!";
        toBattleScreen.appendChild(alertMessage);

        let remove = () =>{
            toBattleScreen.removeChild(alertMessage);
        }

        let alertMessageButton = document.createElement("button");
        alertMessageButton.classList.add("resultAlertButton");
        alertMessageButton.addEventListener("click", remove, false);
        alertMessageButton.innerText = "go!";
        alertMessage.appendChild(alertMessageButton);
    }
}





/*

---------1. NAME VALIDATION-------------------------------------------------

*/
//Text
let alertMessage = document.createElement("p");
alertMessage.classList.add("alert");
alertMessage.innerText = "Welcome! \nWhat\'s your name?:";
containerDiv.appendChild(alertMessage);
//Form
let inputForm = document.createElement("form");
inputForm.classList.add("inputForm");
inputForm.setAttribute("id", "inputForm");
containerDiv.appendChild(inputForm);
//Textbox
let inputField = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.setAttribute("id", "userInput");
inputField.placeholder = "Your name";
inputField.classList.add("inputName")
inputForm.appendChild(inputField);
//Button
let inputButton = document.createElement("button");
inputButton.setAttribute("id", "subButton");
inputButton.setAttribute("type", "button")
inputButton.classList.add("inputButton");
inputButton.innerText = "Accept";
inputForm.appendChild(inputButton);
//Save name into variable
//Variable with message in response to name input
let message = document.createElement("p");
message.setAttribute("id", "messageAlert");
containerDiv.appendChild(message);
//Continue Button creation

let continueButton = document.createElement("button");
continueButton.setAttribute("type", "button");
continueButton.setAttribute("id", "continueButton");
continueButton.innerText = "Continue";
continueButton.classList.add("inputButton");

let getUserName = () => {
    playerName = document.getElementById("userInput").value;
    let output = document.getElementById("messageAlert");

    if (playerName.length < 3) {
        output.textContent = "Name must be longer";
    } else {
        output.textContent = `Welcome ${playerName}!`;
        containerDiv.removeChild(alertMessage);
        containerDiv.removeChild(inputForm);
        containerDiv.appendChild(continueButton);
    }

}
//Event creation
let subButton = document.getElementById("subButton");
let subKey = document.getElementById("inputForm");
subButton.addEventListener("click", getUserName, false);
subKey.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        getUserName();
        e.preventDefault();
    };
});
/*

---------2.CHARACTER SELECTION--------------------------------------------------

*/

//----DIVS containing characters assigned to container----

function displayCharacters() {

    containerDiv.classList.remove("container");
    containerDiv.classList.add("containerTwo");

    let chooseAlert = document.createElement("p");
    chooseAlert.textContent = playerName + " ,please choose your character:";
    chooseAlert.classList.add("chooseAlert");
    containerDiv.appendChild(chooseAlert);

    let alien = document.createElement("button");
    alien.setAttribute("id", "alien");
    alien.setAttribute("type", "button");
    alien.setAttribute("onclick", "alienPlayer()");
    alien.classList.add("alien");
    alien.classList.add("chartOptions");
    containerDiv.appendChild(alien);

    let boy = document.createElement("button");
    boy.setAttribute("id", "boy");
    boy.setAttribute("type", "button");
    boy.setAttribute("onclick", "boyPlayer()");
    boy.classList.add("boy");
    boy.classList.add("chartOptions");
    containerDiv.appendChild(boy);

    let smiley = document.createElement("button");
    smiley.setAttribute("id", "smiley");
    smiley.setAttribute("type", "button");
    smiley.setAttribute("onclick", "smileyPlayer()");
    smiley.classList.add("smiley");
    smiley.classList.add("chartOptions");
    containerDiv.appendChild(smiley);

    let illum = document.createElement("button");
    illum.setAttribute("id", "illum");
    illum.setAttribute("type", "button");
    illum.setAttribute("onclick", "illumPlayer()");
    illum.classList.add("illum");
    illum.classList.add("chartOptions");
    containerDiv.appendChild(illum);

    containerDiv.removeChild(continueButton);
    containerDiv.removeChild(messageAlert);
}

//----Call displayCharacters with continue button----
continueButton.addEventListener("click", displayCharacters, false);

//----To battle screen elements----
//------------container-----------------------------
let toBattleScreen = document.createElement("div");
toBattleScreen.setAttribute("id", "toBattleScreen");
toBattleScreen.classList.add("toBattleScreen");
//------------alert message-----------------------------
let continueMessage = document.createElement("p");
continueMessage.classList.add("alertTwo");
//------------continue button-----------------------------
let toBattleButton = document.createElement("button");
toBattleButton.setAttribute("type", "button");
toBattleButton.setAttribute("id", "toBattleButton");
toBattleButton.setAttribute("onclick", "removeAlertTwo()");
toBattleButton.innerText = "To Battle!!";
toBattleButton.classList.add("toBattleButton");


//------ left upper corner
//------------container-----------------------------
let leftUpperCorner = document.createElement("div");
leftUpperCorner.setAttribute("id", "score");
leftUpperCorner.classList.add("OneOne");

let scoreBoard = document.createElement("div");
scoreBoard.setAttribute("id", "scoreBoard");
scoreBoard.classList.add("scoreBoard");
leftUpperCorner.appendChild(scoreBoard);
function keepScore() {
    a = playerName;
    b = playerScore;
    c = pcScore;
    scoreBoard.innerText = a + ":       " + b + "\nEvil PC:       " + c;
}

function winner() {
    if(playerScore>=5 && playerAvatar==="alien"){

        let winnerScreen = document.createElement("div");
        winnerScreen.setAttribute("id", "winner");
        winnerScreen.classList.add("alienWinnerScreen");
        body.appendChild(winnerScreen);

    }else if(pcScore>=5){

        let winnerScreen = document.createElement("div");
        winnerScreen.setAttribute("id", "winner");
        winnerScreen.classList.add("pcWinnerScreen");
        body.appendChild(winnerScreen);

    }else if(playerScore>=5 && playerAvatar==="boy"){

        let winnerScreen = document.createElement("div");
        winnerScreen.setAttribute("id", "winner");
        winnerScreen.classList.add("boyWinnerScreen");
        body.appendChild(winnerScreen);

    }else if(playerScore>=5 && playerAvatar==="smiley"){

        let winnerScreen = document.createElement("div");
        winnerScreen.setAttribute("id", "winner");
        winnerScreen.classList.add("smileyWinnerScreen");
        body.appendChild(winnerScreen);
    } else if(playerScore>=5 && playerAvatar==="illum"){

            let winnerScreen = document.createElement("div");
            winnerScreen.setAttribute("id", "winner");
            winnerScreen.classList.add("illumWinnerScreen");
            body.appendChild(winnerScreen);
    }else{}
}

//-------right upper corner
//------------container-----------------------------
let rightUpperCorner = document.createElement("div");
rightUpperCorner.setAttribute("id", "evilPc");
rightUpperCorner.classList.add("OneTwo");

//----left lower corner
//------------container-----------------------------
let leftLowerCorner = document.createElement("div");
leftLowerCorner.setAttribute("id", "playerAvatar");
leftLowerCorner.classList.add("TwoOne");

//----right lower corner elements
//------------container-----------------------------
let rightLowerCorner = document.createElement("div");
rightLowerCorner.setAttribute("id", "actions");
rightLowerCorner.classList.add("TwoTwo");

//-------Message
let makeYourChoiceText = document.createElement("p");
rightLowerCorner.appendChild(makeYourChoiceText);

function addText() {
    makeYourChoiceText.innerText = playerName + ",\n choose your weapon :";
}



//-------Options buttons

let rockButton = document.createElement("button")
rockButton.setAttribute("type", "button");
rockButton.setAttribute("id", "rockButton");
rockButton.setAttribute("onclick", "theGame('rock')");
rockButton.classList.add("weaponButtons");
rockButton.innerText = "Rock";
rightLowerCorner.appendChild(rockButton);

let paperButton = document.createElement("button")
paperButton.setAttribute("type", "button");
paperButton.setAttribute("id", "paperButton");
paperButton.setAttribute("onclick", "theGame('paper')");
paperButton.classList.add("weaponButtons");
paperButton.innerText = "Paper";
rightLowerCorner.appendChild(paperButton);

let scissorsButton = document.createElement("button")
scissorsButton.setAttribute("type", "button");
scissorsButton.setAttribute("id", "scissorsButton");
scissorsButton.setAttribute("onclick", "theGame('scissors')");
scissorsButton.classList.add("weaponButtons");
scissorsButton.innerText = "Scissors";
rightLowerCorner.appendChild(scissorsButton);

function removeAlertTwo() {
    body.removeChild(continueMessage);
}

function alienPlayer() {
    body.removeChild(containerDiv);
    body.appendChild(toBattleScreen);
    body.appendChild(continueMessage);
    continueMessage.textContent = "Great Choice " + playerName + "!!";
    continueMessage.appendChild(toBattleButton);
    leftLowerCorner.style.backgroundImage = "url(imgs/alien_macro.png)";
    toBattleScreen.appendChild(leftLowerCorner);
    toBattleScreen.appendChild(rightUpperCorner);
    toBattleScreen.appendChild(leftUpperCorner);
    toBattleScreen.appendChild(rightLowerCorner);
    addText();
    keepScore();
    playerAvatar="alien";
}

function boyPlayer() {
    body.removeChild(containerDiv);
    body.appendChild(toBattleScreen);
    body.appendChild(continueMessage);
    continueMessage.textContent = "Great Choice " + playerName + "!!";
    continueMessage.appendChild(toBattleButton);
    leftLowerCorner.style.backgroundImage = "url(imgs/boy_macro.png)";
    toBattleScreen.appendChild(leftLowerCorner);
    toBattleScreen.appendChild(rightUpperCorner);
    toBattleScreen.appendChild(leftUpperCorner);
    toBattleScreen.appendChild(rightLowerCorner);
    addText();
    keepScore();
    playerAvatar="boy";
}

function illumPlayer() {
    body.removeChild(containerDiv);
    body.appendChild(toBattleScreen);
    body.appendChild(continueMessage);
    continueMessage.textContent = "Great Choice " + playerName + "!!";
    continueMessage.appendChild(toBattleButton);
    leftLowerCorner.style.backgroundImage = "url(imgs/illum_macro.png)";
    toBattleScreen.appendChild(leftLowerCorner);
    toBattleScreen.appendChild(rightUpperCorner);
    toBattleScreen.appendChild(leftUpperCorner);
    toBattleScreen.appendChild(rightLowerCorner);
    addText();
    keepScore();
    playerAvatar="illum";
}

function smileyPlayer() {
    body.removeChild(containerDiv);
    body.appendChild(toBattleScreen);
    body.appendChild(continueMessage);
    continueMessage.textContent = "Great Choice " + playerName + "!!";
    continueMessage.appendChild(toBattleButton);
    leftLowerCorner.style.backgroundImage = "url(imgs/smiley_macro.png)";
    toBattleScreen.appendChild(leftLowerCorner);
    toBattleScreen.appendChild(rightUpperCorner);
    toBattleScreen.appendChild(leftUpperCorner);
    toBattleScreen.appendChild(rightLowerCorner);
    addText();
    keepScore();
    playerAvatar="smiley";
}

