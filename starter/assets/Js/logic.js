//// Link with the elements
const timerEl  = document.querySelector("#timer");
const startScreen = document.querySelector("#start-screen");
const startBtnEl = document.querySelector("#start");
const questionEl = document.querySelector("#questions");
const questionTitle = document.querySelector("#questions-title");
const choicesEl = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const initials = document.querySelector("#initials");
const submitBtn = document.querySelector("#submit");
const feedbackEl = document.querySelector("#feedback");


// linking with Q&A

const quizAnsArray = []
quizAns[0] = quizQ[0];
quizAns[1] = quizQ[1];
quizAns[2] = quizQ[2];
quizAns[3] = quizQ[3];

////set a global varibles
const chosenAns ="";
const timerleft = 30;
const timerCount = 30;
const score = 0;
const highScoresArray =[]


////Set the timmer 
function showTime() {
    const timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        timeLeft--;

        // Timer count cannot be a negative number (for the score)
        if (timeLeft < 0) {
            timeLeft = 0;
        };

        // When the timer ends, the quiz ends
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            state = "end";
            displayState();
        };

        // If all questions are answered, the quiz ends
        if (position === quizQ.length){
            clearInterval(timeInterval);
            state = "end";
            displayState();
        };
    }, 1000)
};

//Create & Link with AnsBtn 
function Ansbtn() {
    // Create Elements
    const title = document.createElement('h2');
    const ansA = document.createElement('button');
    const ansB = document.createElement('button');
    const ansC = document.createElement('button');
    const ansD = document.createElement('button');
    // Set text of elements
    title.innerHTML = questions[position].question;
    ansA.innerHTML = questions[position].A;
    ansB.innerHTML = questions[position].B;
    ansC.innerHTML = questions[position].C;
    ansD.innerHTML = questions[position].D;
    // Set value of answers
    ansA.value = questions[position].A;
    ansB.value = questions[position].B;
    ansC.value = questions[position].C;
    ansD.value = questions[position].D;
    // Append elements to questionsEl
    questionsEl.append(title, ansA, ansB, ansC, ansD);
};

//create State
function displayState(){
    const state = elements.getAttribute("qusterion");

    if (state === "start"){
        display.quizQ = "start";
        timeLeft = 30;
        
    }
    if (state === "quiz") {
        showQuiz();
        showTime();
        }
    if (state === "end") {
        display.endScreen = "end";
        }        
};

        

///Start the quiz
function StartTheQuiz(event) {

    displayState();

    startBtnEl.addEventListener("click", function(event){
         //Prevent the default behavior
        event.preventDefault();
        showTime();
        displayState();   
    });
    // Checks answer, progresses quiz
    questionsEl.addEventListener("click", function (event) {
        const element = event.target;
        if (element.matches("button")) {
            checkAnswer(element.value);
            position++;
            if (position < quizQ.length) {
                quizQ();
            };
        }
    });
        
};



    