'use strict';

let questionCounter = 0;
let score = 0;
let allOfQuestions = questions.length;

function questionObjectArray() {
    // makes array of specific question object
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
    // if counter equal to 8 changes text of the next question button
    if (questionCounter == allOfQuestions - 2) {
        $('.js-next-question').text('Submit Quiz');
    }
    questionCounter++;
    renderQuestionCount();
}

function generateQuestionValues(questionValues) {
    // sets the value of corresponding input element
    $('#option1').val(questionValues[1]);
    $('#option2').val(questionValues[2]);
    $('#option3').val(questionValues[3]);
    $('#option4').val(questionValues[4]);
}

function generateQuestionText(questionText) {
    // sets text of corresponding span element in form
    $('.js-q').text(questionText[0]);
    $('.js-ans-opt1').text(questionText[1]);
    $('.js-ans-opt2').text(questionText[2]);
    $('.js-ans-opt3').text(questionText[3]);
    $('.js-ans-opt4').text(questionText[4]);
}

function renderQuestion() {
    // renders question text and values to the DOM
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


function questionToAnswerFeedback() {
    // hides question section and shows answer feedback section
    $('.js-question-section').hide();
    $('.js-answer-feedback').show();
}

function checkAnswer() {
    let userSelection = $('input:checked').val();
    let correctAnswer = questions[questionCounter].correct;
    
    if (userSelection === undefined) {
        // if no answer selected question restarts
        $('.js-answer-image').attr({'src': './img/bear.jpg', 'alt': 'The wrong answer image'});
        $('.js-answer-feedback-text').text('Please select an answer');
        questionCounter--;
    } else if (userSelection === correctAnswer) {
        // if answer correct adds 1 to score
        score++;
        $('.js-answer-image').attr({'src': './img/mountain.jpg', 'alt': 'The correct answer image'});
        $('.js-answer-feedback-text').text(`${correctAnswer} is the correct answer`);
    } else {
        $('.js-answer-image').attr({'src': './img/bear.jpg', 'alt': 'The wrong answer image'});
        $('.js-answer-feedback-text').text(`${userSelection} is the wrong answer, ${correctAnswer} is the correct answer`);
    }
}

function renderScore() {
    //renders updated score to DOM
    $('.js-current-score').text(`Score: ${score}`);
}

function handleAnswer() {
    $('.js-question-form').on('submit', function(event) {
        event.preventDefault();
        questionToAnswerFeedback();
        checkAnswer();

        // resets radio buttons
        $('input:checked').prop('checked', false);
        renderScore();
    });
}


/* ---------- NEXT QUESTION SECTION ---------- */


function answerFeedbackToReset() {
    $('.js-answer-feedback').hide();
    $('.js-score-feedback').show();
}

function evaluateScore() {
    if (score > 7) {
        $('.js-score-feedback-text').text(`Congrats! You passed your score is ${score * 10}%`);
    } else {
        $('.js-score-feedback-text').text(`Your score is ${score * 10}%, study up next time.`);
    }
}

function answerFeedbackToNext() {
    $('.js-answer-feedback').hide();
    $('.js-question-section').show();
}

function handleNext() {
    $('.js-next-question').on('click', function() {
        if (questionCounter == allOfQuestions - 1) {
            // if last question
            answerFeedbackToReset();
            evaluateScore();
        } else {
            answerFeedbackToNext();
            generateQuestionCount();
            renderQuestion();
        }
    });
}


/* ---------- RESET QUIZ SECTION ---------- */


function resetToQuestion() {
    // shows reset page
    $('.js-score-feedback').hide();
    $('.js-question-section').show();
}

function resetProgress() {
    score = 0;
    questionCounter = 0;
    // replaces text for last question button back to normal
    $('.js-next-question').text('Next Question');

    renderQuestionCount();
    renderScore();
}

function handleRestart() {
    $('.js-quiz-reset').on('click', function() {
        resetToQuestion();
        resetProgress();

        // renders first question
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