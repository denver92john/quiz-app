'use strict';

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
}

function renderQuestion() {
    // responsible for rendering the next question to the DOM

    generateQuestion()

    console.log(`renderQuestion is running`);
}

function submitAnswer() {
    // responsible for submitting selected answer for grading

    console.log(`submitAnswer is running`);
}

function renderAnswerFeedback() {
    // responsible for rendering selected answer for feedback

    console.log(`renderAnswerFeedback is running`);
}

function nextQuestion() {
    // responsible for going on to the next question, by clicking the next
    // question button

    console.log(`nextQuestion is running`);
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
    renderQuestion();
    submitAnswer();
    renderAnswerFeedback();
    nextQuestion();
    renderResultsFeedback();
    restartQuiz();
}

$(handleYellowstone);