const questions=[
    {
        question : "What is the darkest planet in the universe ?",
        choices:["TrEs-2b","kepler-289","TrEs-4b","ic-1101"],
        correctAnswer: 0
    },
    {
        question : "Which planet is known as the red planet?",
        choices:["Venus","Mars","Jupiter","Saturn"],
        correctAnswer: 1
    },
    {
        question : "What is the largest ocean on earth?",
        choices:["Atlantic ocean","Indian ocean","Arctic ocean","Pacific ocean"],
        correctAnswer: 3
    }
];

const container=document.querySelector(".container");
const questionElement=document.getElementById("question");
const choiceElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("time");

let currentQuestion=0;
let score=0;
let timeLeft=120;

function loadQuestion(){
    const question=questions[currentQuestion];
    questionElement.textContent=question.question;

    choiceElement.innerHTML="";
    for(let i=0;i<question.choices.length;i++){
        const li=document.createElement("li");
        const radio=document.createElement("input");
        radio.type="radio";
        radio.name="choice";
        radio.value=i;
        li.appendChild(radio);
        li.appendChild(document.createTextNode(question.choices[i]));
        choiceElement.appendChild(li);
    }

}

function checkAnswer(){
    const selectOption=document.querySelector("input[name='choice']:checked");
    if(selectOption){
        const selectAnswer=parseInt(selectOption.value);
        if(selectAnswer===questions[currentQuestion].correctAnswer){
            score++
        }
        currentQuestion++;
        if(currentQuestion<questions.length){
            loadQuestion();
        }
        else{
            showScore();
        }
    }
}
function showScore(){
    clearInterval(timerInterval);
    questionElement.style.display="none";
    choiceElement.style.display="none";
    submitButton.style.display="none";
    scoreElement.textContent=`your score: ${score} out of ${questions.length}`;
    scoreElement.style.display="block";
    restartButton.style.display="block";
}

function restartQuiz(){
    currentQuestion=0;
    score=0;
    timeLeft=120;
    loadQuestion();
    restartButton.style.display="none";
    questionElement.style.display="block";
    choiceElement.style.display="block";
    submitButton.style.display="block";
    scoreElement.style.display="none";
    timerInterval=setInterval(updateTimer,1000);

}
function updateTimer(){
    const minutes=Math.floor(timeLeft/60);
    let seconds=timeLeft%60;
    seconds=seconds<10 ?"0"+seconds:seconds;
    timerElement.textContent= `${minutes}:${seconds}`;

    if(timeLeft===0){
        showScore();
    }
    else{
        timeLeft--;
    }

}

let timerInterval=setInterval(updateTimer,1000);
submitButton.addEventListener("click", checkAnswer);
restartButton.addEventListener("click",restartQuiz);

loadQuestion();
restartButton.style.display="none";

