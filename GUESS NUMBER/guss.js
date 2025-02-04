let randomNumber=parseInt(Math.random()*100+1);
// console.log(randomNumber);

const submit = document.querySelector(".guessSubmit");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHigh=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");


const button=document.createElement('button');
let prevGuess=[];
let numGuess=1;

let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`please enter the number`);
    }else if(guess <1){
        alert(`please enter the number more than 1`);
    }else if(guess >100 ){
        alert(`please enter the number less than 100`);
    }
    else {
        if(numGuess===10){
            displayGuess(guess);
            displayMessage(`game over . random number is ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
      } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
      } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
      }

}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML +=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    button.innerHTML=`<p id=newGame>start newGame</p> `;
    startOver.appendChild(button);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild('button');
        playGame=true;
    })
}