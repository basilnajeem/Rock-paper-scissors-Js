let pcScore = document.querySelector("#pc-score-number");
let yourScore = document.querySelector("#your-score-number");
let youPicked = document.querySelector(".you-picked");
let pcPicked = document.querySelector(".pc-picked");
let myOut = document.querySelector("#myout");
let pcOut = document.querySelector("#pcout");
let wonLose = document.querySelector("#won-lose");
let againstPc = document.querySelector("#against-pc");
let winScreen = document.querySelector(".win-screen");
let symbols = document.querySelector(".symbols");
let scoreBoard = document.querySelector(".score-board");
let winnerScreen = document.querySelector(".winner-screen");
let rulesBoxClose = document.querySelector(".close");
let rulesBox = document.querySelector(".rules-box");
let rulesButton = document.querySelector(".rules-button");
let nextButton = document.querySelector(".next-button");


let count1 = localStorage.getItem("count1") ? parseInt(localStorage.getItem("count1")) : 0;
let count2 = localStorage.getItem("count2") ? parseInt(localStorage.getItem("count2")) : 0;


yourScore.innerHTML = count1;
pcScore.innerHTML = count2;




let gameArray = ["rock", "paper", "scissors"];
nextButton.style.visibility = "hidden";
function gamescore(event) {
    winScreen.style.display = "flex";
    symbols.style.display = "none";
    let element = event.target.id;
    let random = Math.floor(Math.random() * 3);

    if (element === gameArray[random]) {
        myOut.setAttribute("src", `./images/${element}.png`);
        pcOut.setAttribute("src", `./images/${gameArray[random]}.png`);
        wonLose.innerHTML = "TIE UP";
        myOut.style.boxShadow = "none";
        pcOut.style.boxShadow = "none";
        againstPc.style.visibility = "hidden";
    }

    if (element === "scissors" && gameArray[random] === "rock") {
        myOut.setAttribute("src", `./images/scissors.png`);
        pcOut.setAttribute("src", `./images/rock.png`);
        pcOut.style.borderRadius = "50%";
        pcOut.style.boxShadow = "0 0 0 20px green, 0 0 0 30px rgba(0, 185, 0, 0.918), 0 0 0 40px rgb(0, 221, 18)";
        myOut.style.boxShadow = "none";
        wonLose.innerHTML = "YOU LOST";
        againstPc.style.visibility = "visible";
        count2 += 1;
        pcScore.innerHTML = count2;
        localStorage.setItem("count2", count2);
        nextButton.style.visibility = "hidden";
    }

    if (element === "scissors" && gameArray[random] === "paper") {
        myOut.setAttribute("src", `./images/scissors.png`);
        pcOut.setAttribute("src", `./images/paper.png`);
        myOut.style.borderRadius = "50%";
        myOut.style.boxShadow = "0 0 0 20px green, 0 0 0 30px rgba(0, 185, 0, 0.918), 0 0 0 40px rgb(0, 221, 18)";
        pcOut.style.boxShadow = "none";
        wonLose.innerHTML = "YOU WON";
        againstPc.style.visibility = "visible";
        count1 += 1;
        yourScore.innerHTML = count1;
        localStorage.setItem("count1", count1);
        nextButton.style.visibility = "visible";
    }

    if (element === "rock" && gameArray[random] === "paper") {
        myOut.setAttribute("src", `./images/rock.png`);
        pcOut.setAttribute("src", `./images/paper.png`);
        pcOut.style.borderRadius = "50%";
        pcOut.style.boxShadow = "0 0 0 20px green, 0 0 0 30px rgba(0, 185, 0, 0.918), 0 0 0 40px rgb(0, 221, 18)";
        myOut.style.boxShadow = "none";
        wonLose.innerHTML = "YOU LOST";
        againstPc.style.visibility = "visible";
        count2 += 1;
        pcScore.innerHTML = count2;
        localStorage.setItem("count2", count2);
        nextButton.style.visibility = "hidden";
    }

    if (element === "rock" && gameArray[random] === "scissors") {
        myOut.setAttribute("src", `./images/rock.png`);
        pcOut.setAttribute("src", `./images/scissors.png`);
        myOut.style.borderRadius = "50%";
        pcOut.style.boxShadow = "none";
        myOut.style.boxShadow = "0 0 0 20px green, 0 0 0 30px rgba(0, 185, 0, 0.918), 0 0 0 40px rgb(0, 221, 18)";
        wonLose.innerHTML = "YOU WON";
        againstPc.style.visibility = "visible";
        count1 += 1;
        yourScore.innerHTML = count1;
        localStorage.setItem("count1", count1);
        nextButton.style.visibility = "visible";
    }

    if (element === "paper" && gameArray[random] === "scissors") {
        myOut.setAttribute("src", `./images/paper.png`);
        pcOut.setAttribute("src", `./images/scissors.png`);
        pcOut.style.borderRadius = "50%";
        pcOut.style.boxShadow = "0 0 0 20px green, 0 0 0 30px rgba(0, 185, 0, 0.918), 0 0 0 40px rgb(0, 221, 18)";
        myOut.style.boxShadow = "none";
        wonLose.innerHTML = "YOU LOST";
        againstPc.style.visibility = "visible";
        count2 += 1
        pcScore.innerHTML = count2;
        localStorage.setItem("count2", count2);
        nextButton.style.visibility = "hidden";
    }

    if (element === "paper" && gameArray[random] === "rock") {
        myOut.setAttribute("src", `./images/paper.png`);
        pcOut.setAttribute("src", `./images/rock.png`);
        myOut.style.borderRadius = "50%";
        myOut.style.boxShadow = "0 0 0 20px green, 0 0 0 30px rgba(0, 185, 0, 0.918), 0 0 0 40px rgb(0, 221, 18)";
        pcOut.style.boxShadow = "none";
        wonLose.innerHTML = "YOU WON";
        againstPc.style.visibility = "visible";
        count1 += 1;
        yourScore.innerHTML = count1;
        localStorage.setItem("count1", count1);
        nextButton.style.visibility = "visible";
    }
}

function playagain() {
    winScreen.style.display = "none";
    symbols.style.display = "flex";
    nextButton.style.visibility = "hidden";
}

function playagain1() {
    scoreBoard.style.display = "flex";
    symbols.style.display = "flex";
    winnerScreen.style.display = "none";
    nextButton.style.visibility = "hidden";
}

function hurray() {
    winScreen.style.display = "none";
    scoreBoard.style.display = "none";
    symbols.style.display = "none";
    winnerScreen.style.display = "flex";
    nextButton.style.visibility = "hidden";
}

rulesButton.addEventListener("click", function () {
    rulesBox.style.display = "block";
})

rulesBoxClose.addEventListener("click", function () {
    rulesBox.style.display = "none";
})

