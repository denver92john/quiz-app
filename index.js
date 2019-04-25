'use strict';

const correctAnswerImg = "https://www.nps.gov/yell/planyourvisit/images/Avalanche-Peak-4sm.jpg?maxwidth=1200&maxheight=1200&autorotate=false";
const wrongAnswerImg = "https://static.boredpanda.com/blog/wp-content/uploads/2014/03/funny-bears-doing-human-things-1.jpg";

let questionCounter = 0;
let score = 0;
let questionCount = questions.length;

function generateQuestion(q) {
    return `
        <section role="region" class="">
			<h2>${q.question}</h2>
			<form>
				<label>
					<input type="radio" name="answer" value="${q.ansA}"><span>${q.ansA}</span>
				</label>
				<label>
					<input type="radio" name="answer" value="${q.ansB}"><span>${q.ansB}</span>
				</label>
				<label>
					<input type="radio" name="answer" value="${q.ansC}"><span>${q.ansC}</span>
				</label>
				<label>
					<input type="radio" name="answer" value="${q.ansD}"><span>${q.ansD}</span>
				</label>
				<button type="submit" class="submitAnswer">Submit</button>
			</form>
		</section>`;
}



function startQuiz() {
    // responsible for starting the yellowstone quiz
    $('section').on('click', '.js-start-button', function(event) {
        


    });

    console.log(`startQuiz is running`);
    renderQuestion();
}

function renderQuestion() {
    // responsible for rendering the next question to the DOM
    /* 
    // This function renders a new question
function renderQuestion(){
  $(".questions-form p").text(questionsArray[questionCounter].question);
  $(".questions-form #option-one").val(questionsArray[questionCounter].optionone);
  $(".questions-form #option-two").val(questionsArray[questionCounter].optiontwo);
  $(".questions-form #option-three").val(questionsArray[questionCounter].optionthree);
  $(".questions-form #option-four").val(questionsArray[questionCounter].optionfour);
   
  $(".questions-form #option-one").next().text(questionsArray[questionCounter].optionone);
  $(".questions-form #option-two").next().text(questionsArray[questionCounter].optiontwo);
  $(".questions-form #option-three").next().text(questionsArray[questionCounter].optionthree);
  $(".questions-form #option-four").next().text(questionsArray[questionCounter].optionfour);
}
    */

    generateQuestion()

    console.log(`renderQuestion is running`);
}

function submitAnswer() {
    // responsible for submitting selected answer for grading

    console.log(`submitAnswer is running`);
    renderAnswerFeedback();
}

function renderAnswerFeedback() {
    // responsible for rendering submitted answer for feedback

    console.log(`renderAnswerFeedback is running`);
}

function nextQuestion() {
    // responsible for going on to the next question, by clicking the next
    // question button

    console.log(`nextQuestion is running`);
    renderQuestion();
}

function renderResultsFeedback() {
    // responsible for rendering the overall results page

    console.log(`rendersResultsFeedback is running`);
}

function restartQuiz() {
    // responsible for restarting the quiz by selecting the restart button
    // on the results page

    console.log(`restartQuiz is running`);
}

function handleYellowstone() {
    startQuiz();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

// $(handleYellowstone);