$(document).ready(function(){


// Dont forget music! Spotify API for the dark knight?
var totalNumberOfQuestions = 10;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeAllowed = 95;
var counter ;
var unansweredQuestions = 0;

function reset(){
	correctAnswer = 0;
	incorrectAnswer = 0;
	unansweredQuestions = 0;
	timeAllowed = 95;
	$("#resultsSection").fadeOut(1000);
	$("headerRow").delay(1000).fadeIn(5000);
	clearInterval(counter);
	$('input[type="radio"]:checked').prop('checked', false);
};

function run() {
	counter = setInterval(decrement, 1000);

};

function decrement() {
	timeAllowed--;
	$("#timeAllowed").html("<h2>" + timeAllowed + "</h2>");

	if (timeAllowed == 0) {
		solveTheCrime();
	}
};

function suitUp(){
	// play music
	$("#headerRow").fadeOut(1000);
	$("#question1").delay(1000).fadeIn(3000);
	run();
};

// Here, I would like to have a function that determines what 
// question we are on by using a for loop to detect the id, 
// so for example, for loop question[i], move on to the next 
// question. This would be inside an event listener for button 
// click of the nextCrimeButton
function nextCrimeButton() {

};
function solveTheCrime(){
	$("#question10").fadeOut(1000);
	$("#resultsSection").delay(1000).fadeIn(5000);

	$("input:checked").each(function(){
		if($(this).val() == "true"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		};
		unansweredQuestions = totalNumberOfQuestions -(correctAnswer + incorrectAnswer);

	$("#results").html("<h3> Your Results</h3><hr><p>Correct Answers : "+ correctAnswer + "</p> <p>Incorrect Answers: " + incorrectAnswer + "</p><p>Unanswered Questions: " + unansweredQuestions + "</p>")
	});
};

	$(document).on("click", "#suitUpButton", function(){
		suitUp();
	});

	$(document).on("click", "#solveTheCrimeButton", function(){
		solveTheCrime();
	});

	$(document).on("click", "#resetTheCrimeButton", function(){
		reset();
	});



});