'use strict';

const correctAnswerImg = "https://www.nps.gov/yell/planyourvisit/images/Avalanche-Peak-4sm.jpg?maxwidth=1200&maxheight=1200&autorotate=false";
const wrongAnswerImg = "https://static.boredpanda.com/blog/wp-content/uploads/2014/03/funny-bears-doing-human-things-1.jpg";

let questionCounter = 0;
let score = 0;
let allOfQuestions = questions.length;

function renderScore() {
    //console.log(`renderScore() is running`);

    $('.js-current-score').text(`Score: ${score}`);
}

function renderQuestionCount() {
    //console.log('renderQuestionCount() is running');
    
    $('.js-question-count').text(`Question: ${questionCounter}/10`);
}

function renderQuestion() {
    //console.log('renderQuestion() is running');
    // look into using .next() to make this function shorter

    $('.js-q').text(questions[questionCounter].question);

    $('#option1').val(questions[questionCounter].ansA);
    $('#option2').val(questions[questionCounter].ansB);
    $('#option3').val(questions[questionCounter].ansC);
    $('#option4').val(questions[questionCounter].ansD);

    $('.js-ans-opt1').text(questions[questionCounter].ansA);
    $('.js-ans-opt2').text(questions[questionCounter].ansB);
    $('.js-ans-opt3').text(questions[questionCounter].ansC);
    $('.js-ans-opt4').text(questions[questionCounter].ansD);

}

function startQuiz() {
    // responsible for starting the yellowstone quiz
    
    // double check on how below bubbles up the DOM
    $('.js-start-button').on('click', function() {
        // console.log(`startQuiz is running`);
        $('.js-start-quiz').hide();
        $('.js-question-section').show();
        
        renderScore();
        renderQuestionCount();
        renderQuestion();
    });
}


/* ---------- SUBMIT ANSWER SECTION ---------- */


function renderNewScore() {
    if ($('input:checked').val() === questions[questionCounter].correct) {
        score++;
    }
    renderScore();
}

function userSelectedCorrectAnswer() {
    // console.log('userSelectedCorrectAnswer() is running');

    $('.js-answer-image').attr({'src': correctAnswerImg, 'alt': 'The correct answer image'});
    $('.js-answer-feedback-text').text(`${questions[questionCounter].correct} is the correct answer`);
}

function userSelectedWrongAnswer() {
    // console.log('userSelectedWrongAnswer() is running');

    $('.js-answer-image').attr({'src': wrongAnswerImg, 'alt': 'The wrong answer image'});
    $('.js-answer-feedback-text').text(`${$('input:checked').val()} is the wrong answer, ${questions[questionCounter].correct} is the correct answer`);
}

function checkAnswer() {
    let selectedOption = $('input:checked').val();

    let correctAnswer = questions[questionCounter].correct;

    if (selectedOption === correctAnswer) {
        userSelectedCorrectAnswer();
    } 
    if (selectedOption !== correctAnswer) {
        userSelectedWrongAnswer();
    }
}

function renderAnswerFeedback() {

    $('.js-question-section').hide();

    $('.js-answer-feedback').show();

}

function submitAnswer() {
    // responsible for submitting selected answer for grading
    $('.js-answer-button').on('click', function() {

        // render score-feedback section
        renderAnswerFeedback();

        // check answer
        checkAnswer();

        // render new score if correct at same time when rendering answer-feedback section
        renderNewScore();

    });

}



/* ---------- NEXT QUESTION SECTION ---------- */

function renderResultsFeedback() {
    console.log('renderResultsFeedback() is running');

    $('.js-question-section').hide();

    $('.js-score-feedback').show();

    // maybe check grade of quiz and give feedback?
}



// clears previous text for question and answers and renders next question and options

function resetQuestion() {
    $('.js-q').text('');

        $('.js-ans-opt1').text('');
        $('.js-ans-opt2').text('');
        $('.js-ans-opt3').text('');
        $('.js-ans-opt4').text('');
}


function rerenderQuestion() {
    if (questionCounter < allOfQuestions) {
        
        resetQuestion();

        renderQuestion();
    } else {
        renderResultsFeedback();
    }
}

function rerenderQuestionSection() {
    $('.js-answer-feedback').hide();

    $('.js-question-section').show();
}

// adds 1 to questionCounter and rerenders question questionCounter
function addToQuestionCounter() {
    questionCounter++;
    //console.log(`questionCounter is ${questionCounter}`);

    renderQuestionCount();
}

function nextQuestion() {
    // responsible for going on to the next question, by clicking the next
    // question button
    $('.js-next-question').on('click', function() {
        //console.log('nextQuestion() is running');

        // render new question count
        addToQuestionCounter();

        // hide answer-feedback section and rerender question-section
        rerenderQuestionSection();

        // go on to next question
        rerenderQuestion();

    });

}



/* ---------- RESET QUIZ SECTION ---------- */


function hideScoreFeedback() {
    $('.js-score-feedback').hide();
}


function restartQuiz() {
    // responsible for restarting the quiz by selecting the restart button
    // on the results page

    $('.js-quiz-reset').on('click', function() {
        console.log('reset quiz button was clicked');
        console.log(`score is ${score} and question is ${questionCounter}`);
        
        // hide score feedback 
        hideScoreFeedback();
        
        // reset score


        // reset question count


        // rerender question section
        
        
        
        
        // rerender the first question
        

    });
    
    
    
}

function handleYellowstone() {
    startQuiz();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

$(handleYellowstone);