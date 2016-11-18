$(document).ready(function(){



var questionPool = [
	{
		"Question" : "Example Question Text?",
		"answerChoices": [
							"Example Answer A", 
							"Example Answer B", 
							"Example Answer C", 
							"Example Answer D",
						],
		"answer" : "A"
	},
	{
		"Question" : "Example Question Text?",
		"answerChoices": [
							"Example Answer A", 
							"Example Answer B", 
							"Example Answer C", 
							"Example Answer D",
						],
		"answer" : "A"
	},
	{
		"Question" : "Example Question Text?",
		"answerChoices": [
							"Example Answer A", 
							"Example Answer B", 
							"Example Answer C", 
							"Example Answer D",
						],
		"answer" : "A"
	},
];


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

function displayQuestion(index){

	// This is my object with my questions and answers in it.
	var object = questionPool[index];
	// This is creating a variable named question equal to the array value of question for the object variable
	var question = object["Question"];
	// This is creating a variable named choices which is equal to the array value of answer choices within the object
	var choices = object["answerChoices"];
	// This is creating a variable named header equal to the jquery of adding html
	var header = $("<h1>");
	// This is taking <h1> and adding the text from the question variable
	header.text(question);
	// This is dynamically adding the updated header and appending it to the DOM in the #questionGroup id
	$("#questionGroup").append(header);
	

	// This is running a for loop for the answer choices
	for (var i = 0; i < choices.length; i++){
		// Here we are creating a variable named label, and assigning the jquery html value of <label> to it.
		var label = $("<label>");
		// In the label variable that we are going to be dynamically inserting into the html, we are giving it a class of radio-inline and answer, making the buttons that sit next to one another on a row.
		label.addClass("radio-inline answer");
		// Simple console of the label variable, which should have the classes added above now.
		console.log(label);
		// creating a variable named input that will be creating buttons with.
		var input= $("<input>");
		// Adding data attributes to the input variable of type: "radio"
		input.attr("type", "radio");
		// This is creating all answer choices based on the amount of answers in the array, so for the ones we have now, should create 4 answers each
		input.text(choices[i]);
		// This is actually appending the input variable (answer choices) to the redefined label variable. 
		label.append(input);
		// dynamically adding the information using jquery to the dom using the append method.
		$("#questionGroup").append(label);
		console.log(input);

	}
	// console.log(question);
	// console.log(object);
	// console.log($("#questionGroup"));
	// console.log(choices);
}

function suitUp(){
	// play music
	$("#headerRow").fadeOut(1000);
	// $("#question1").delay(1000).fadeIn(3000);
	displayQuestion(0);
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



















