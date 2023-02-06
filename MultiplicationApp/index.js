const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById('question');
questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const correctAnswer = num1*num2;

let score = JSON.parse(localStorage.getItem("score")); // by default, each time we submit a form the page will reload
// so we will store the score in the local storage of the browser

if (!score){
    score = 0;
}

const scoreEl = document.getElementById("score");
scoreEl.innerHTML = `Score : ${score}`;

formEl.addEventListener("submit", ()=>{
    const userAnswer = +input.value;

    if (userAnswer === correctAnswer){
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
})  // any time a user submits a form , we activate a callback function


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}   // we need to store the value as a string, numbers not allowed

