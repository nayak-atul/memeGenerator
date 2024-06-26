const form = document.querySelector("form");
const sSubmit = document.querySelector(".sSubmit");
const pGuess = document.querySelector("#pGuess");
const rGuess = document.querySelector("#rGuess");
const rGuessValue = document.querySelector("#rGuessValue");
const Guess = document.querySelector(".guess");
const loOrHi = document.querySelector(".loOrHi");
const p = document.querySelector("p");
const result = document.querySelector("#result");

const startOver = document.querySelector(".lLine");
var tText = document.querySelector(".tText");



const correctGuess= 55;

let prevGuess = [];
let numGuess = 0;
// let playGame = true;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var tText = parseInt(document.querySelector('.tText').value);
    tText.value = " ";
    

    if(tText == '' || tText <=0 || isNaN(tText) || tText > 100){
        result.innerHTML = `Plz give any Number between 1 to 100`;
        result.style.color = "red";
    }
    else if(tText === correctGuess){
        result.innerHTML = `WOW! You guess right Number ✔${tText}`;

    }
    else{
        if(tText > correctGuess){
            loOrHi.innerHTML = `You Entered High value`;
            // prevGuess.push(tText);
            pGuess.innerHTML += `${tText}   `;
            numGuess++;
            rGuessValue.innerHTML = `${10 - numGuess}`;

        }
        else{
            tText.value = '';
            loOrHi.innerHTML = `You Entered Low value`;
            prevGuess.push(tText);
            pGuess.innerHTML += `${tText}  `;
            numGuess++;
            rGuessValue.innerHTML = `${10 - numGuess}`;

        }
    }
    function endGame() {
        tText.value = '';
        tText.setAttribute('disabled', '');
        p.classList.add('button');
        p.innerHTML = '<h2 id="newGame>Start new Game</h2>';
        startOver.appendChild(p);
        playGame = false;
        newGame();
    }
    function newGame(){
        const newGameButton = document.querySelector('#newGame');
        newGameButton.addEventListener('click', function(e){
            prevGuess = [];
            numGuess = 0;
            Guess.innerHTML = '';
             rGuessValue.innerHTML = '${10 - numGuess}';
            tText.removeAttribute('disabled');
            startOver.removeChild(p);
            playGame = true;
        });
    }
 })