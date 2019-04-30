'use strict';

const correctAnswerImg = "https://www.nps.gov/yell/planyourvisit/images/Avalanche-Peak-4sm.jpg?maxwidth=1200&maxheight=1200&autorotate=false";
const wrongAnswerImg = "https://static.boredpanda.com/blog/wp-content/uploads/2014/03/funny-bears-doing-human-things-1.jpg";

let questionCounter = 0;
let score = 0;
let allOfQuestions = questions.length;

function questionObjectArray() {
    return Object.values(questions[questionCounter]);
}

// hides start section and shows question section
function startToQuestion() {
    $('.js-start-quiz').hide();
    $('.js-question-section').show();
}

function renderQuestionCount() {
    // renders updated question count to the DOM
    $('.js-question-count').text(`Question: ${questionCounter + 1}/10`);
}

function generateQuestionCount() {
    if (questionCounter < allOfQuestions) {
        questionCounter++;
    }

    renderQuestionCount();
}

function generateQuestionValues(questionValues) {
    $('#option1').val(questionValues[1]);
    $('#option2').val(questionValues[2]);
    $('#option3').val(questionValues[3]);
    $('#option4').val(questionValues[4]);
}

function generateQuestionText(questionText) {
    $('.js-q').text(questionText[0]);
    $('.js-ans-opt1').text(questionText[1]);
    $('.js-ans-opt2').text(questionText[2]);
    $('.js-ans-opt3').text(questionText[3]);
    $('.js-ans-opt4').text(questionText[4]);
}

// renders question text and values to the DOM
function renderQuestion() {
    generateQuestionValues(questionObjectArray());
    generateQuestionText(questionObjectArray());
}

function handleStart() {
    $('.js-start-button').on('click', function() {
        startToQuestion();
        renderQuestion();
        renderQuestionCount();
    });
}


/* ---------- SUBMIT ANSWER SECTION ---------- */




// hides question section and shows answer feedback section
function questionToAnswerFeedback() {
    $('.js-question-section').hide();
    $('.js-answer-feedback').show();
}

function checkAnswer() {
    let userSelection = $('input:checked').val();
    let correctAnswer = questions[questionCounter].correct;

    if (userSelection === undefined) {
        alert('Please select an answer');
    } else if (userSelection === correctAnswer) {
        score++;

        $('.js-answer-image').attr({'src': correctAnswerImg, 'alt': 'The correct answer image'});
        $('.js-answer-feedback-text').text(`${correctAnswer} is the correct answer`);
    } else {
        $('.js-answer-image').attr({'src': wrongAnswerImg, 'alt': 'The wrong answer image'});
        $('.js-answer-feedback-text').text(`${userSelection} is the wrong answer, ${correctAnswer} is the correct answer`);
    }
}

function renderScore() {
    //renders updated score to DOM
    $('.js-current-score').text(`Score: ${score}`);
}

function handleAnswer() {
    $('.js-answer-button').on('click', function() {
        // render score-feedback section
        questionToAnswerFeedback();

        // checks answer
        checkAnswer();

        // render new score if correct
        renderScore();
    });
}




/* ---------- NEXT QUESTION SECTION ---------- */




function answerFeedbackToNext() {
    $('.js-answer-feedback').hide();
    $('.js-question-section').show();
}

function answerFeedbackToReset() {
    $('.js-answer-feedback').hide();
    $('.js-score-feedback').show();
}

function handleNext() {
    $('.js-next-question').on('click', function() {

        if (questionCounter == allOfQuestions - 1) {
            answerFeedbackToReset();
        } else {
            answerFeedbackToNext()

            generateQuestionCount()

            renderQuestion();
        }
    });
}



/* ---------- RESET QUIZ SECTION ---------- */

function resetToQuestion() {
    $('.js-score-feedback').hide();
    $('.js-question-section').show();
}

function resetProgress() {
    score = 0;
    questionCounter = 0;

    renderQuestionCount();
    renderScore();
}

function handleRestart() {
    // responsible for restarting the quiz by selecting the restart button
    // on the results page

    $('.js-quiz-reset').on('click', function() {
        resetToQuestion();

        resetProgress();

        renderQuestion();
    });
}

function handleYellowstone() {
    handleStart();
    handleAnswer();
    handleNext();
    handleRestart();
}

$(handleYellowstone);