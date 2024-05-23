const questions=[
    {
        question:"which is largest animal in the world",
        answer:[
            {text: "shark", correct:false},
            {text: "blue whale", correct: true},
            {text: "elephant", correct:false},
            {text: "giraffe", correct:false},
        ]
    },
    {
        question:"which is largest desert in the world",
        answer:[
            {text: "Kalahari", correct:false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct:false},
            {text: "Antarctica", correct:true},
        ]
    },
    {
        question:"which is smallest continent in the world",
        answer:[
            {text: "Asia", correct:false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct:false},
            {text: "Africa", correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}
function showQuestion() {
    resetState();//reset the prev q and ans
    //display the question
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    //display the answer
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(params) {
    nextButton.style.display="none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(params) {
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}
function handleNextButton(params) {
    currentQuestionIndex++;
    if (currentQuestionIndex<questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
       if (currentQuestionIndex<questions.length) {
        handleNextButton();
       }
       else{
        startQuiz();
       }
})
startQuiz();

