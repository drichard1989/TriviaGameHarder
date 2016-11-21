$(document).ready(function(){


var questionPool = [
	{
		"Question" : "In what phase of the movie's filming timeline did Heath Ledger pass away?",
		"answerChoices": [
							"After the film was completed filming", 
							"Before his role was finished filming", 
							"After the filming in the United States was finished", 
							"2 weeks before the Academy Awards",
						],
		"answer" : "After the filming in the United States was finished"
	},
	{
		"Question" : "Who designed the original concept of the Joker's makeup for the film?",
		"answerChoices": [
							"Christopher Nolan", 
							"Heath Ledger", 
							"Mark Hamill", 
							"DC Comics",
						],
		"answer" : "Heath Ledger"
	},
	{
		"Question" : "In what city is this movie filmed?",
		"answerChoices": [
							"New York", 
							"Boston", 
							"Chicago", 
							"Seattle",
						],
		"answer" : "Chicago"
	},
	{
		"Question" : "While filming the chase scene with the Joker and the SWAT vans...",
		"answerChoices": [
							"One of only four IMAX cameras in the world was destroyed", 
							"Gary Oldman broke a rib", 
							"Christian Bale raged on set", 
							"Christopher Nolan's foot was broken by a lead pipe",
						],
		"answer" : "One of only four IMAX cameras in the world was destroyed"
	},
	{
		"Question" : "Bruce drives a Lamborghini Murcielago in the movie. The English word for Murcielago is ...",
		"answerChoices": [
							"Protector", 
							"Bat", 
							"Glider", 
							"Savior",
						],
		"answer" : "Bat"
	},
	{
		"Question" : "This movie takes place how long after Batman Begins?",
		"answerChoices": [
							"8 Months", 
							"2 Years", 
							"3 Weeks", 
							"1 Year",
						],
		"answer" : "8 Months"
	},
	{
		"Question" : "The first four days of scheduled shooting resulted in no film being rolled. Instead, Christopher Nolan screened two films for the cast and crew with a break in between. What was the first film shown?",
		"answerChoices": [
							"Batman Begins", 
							"A Clockwork Orange", 
							"Citizen Kane", 
							"Heat",
						],
		"answer" : "Heat"
	},
	{
		"Question" : "The nine-minute suite composed for the Joker is based on two notes. What two notes comprise the piece?",
		"answerChoices": [
							"D and C for DC comics", 
							"C and B for Christian Bale", 
							"C and A", 
							"E and C",
						],
		"answer" : "D and C for DC comics"
	},
	{
		"Question" : "How many Academy Award nominations did this movie receive?",
		"answerChoices": [
							"3", 
							"5", 
							"6", 
							"8",
						],
		"answer" : "8"
	},
	{
		"Question" : "The Gotham City license plates were directly modeled off of what state's license plates?",
		"answerChoices": [
							"Illinois", 
							"New York", 
							"Arizona", 
							"New Jersey",
						],
		"answer" : "Illinois"
	},
];


// Global variables needed
var totalNumberOfQuestions = 10;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeAllowed = 95;
var counter ;
var unansweredAmount = 0;
var index = 0;
var batmanMusic = new Audio(src = "assets/music/batmanMusic.mp3")

// resets the quiz after the button is clicked on the last screen
function reset(){
	correctAnswer = 0;
	incorrectAnswer = 0;
	unansweredQuestions = 0;
	timeAllowed = 95;
	$("#resultsRow").fadeOut(500);
	$("#headerRow").delay(2000).fadeIn(3000);
	clearInterval(counter);
	$('input[type="radio"]:checked').prop('checked', false);
	index = 0;
	$("#questionGroup").empty(); 
};

// Sets the value that the quiz will count down at
function run() {
	counter = setInterval(decrement, 1000);
};
// Reduces the value, and prints that value on the DOM
function decrement() {
	timeAllowed--;
	$("#timeAllowed").html("<h2>" + timeAllowed + "</h2>");
	// If time = 0, push to the results screen by running the function solveTheCrime
	if (timeAllowed == 0) {
		solveTheCrime();
	}
};


// This function will display the question at the nth index value of the object with my questions and answer choices in it
function displayQuestion(index){

	// This is my object with my questions and answers in it.
	var object = questionPool[index];
	console.log(index);
	// This is creating a variable named question equal to the array value of question for the object variable
	var question = object["Question"];
	// This is creating a variable named choices which is equal to the array value of answer choices within the object
	var choices = object["answerChoices"];
	// This is creating a variable named header equal to the jquery of adding html
	var header = $("<h2>");
	// This is taking <h2> and adding the text from the question variable
	header.text(question);
	// This is dynamically adding the updated header and appending it to the DOM in the #questionGroup id
	$("#questionGroup").prepend(header);


	// This is running a for loop for the answer choices
	for (var i = 0; i < choices.length; i++){
		// Here we are creating a variable named label, and assigning the jquery html value of <label> to it.
		var label = $("<label>");
		// In the label variable that we are going to be dynamically inserting into the html, we are giving it a class of  answer, making the buttons that sit next to one another on a row.
		label.addClass("answer");
		// Simple console of the label variable, which should have the classes added above now.
		// creating a variable named input that will be creating buttons with.
		var input= $("<input>");
		// Adding data attributes to the input variable of type: "radio"
		input.attr("name", "optradio");
		input.attr("type", "radio");
		input.attr("value", choices[i]);
		input.addClass("btn btn-default")
		// This is creating all answer choices based on the amount of answers in the array, so for the ones we have now, should create 4 answers each
		label.text(choices[i]);
		// This is actually appending the input variable (answer choices) to the redefined label variable. 
		var endLabel = $("</label>");
		label.prepend(input);

		// dynamically adding the information using jquery to the dom using the append method.
		$("#questionGroup").append(label);

	};
};

// This function runs when we want to start the quiz by clicking the button on the main screen
function suitUp(){
	
	batmanMusic.play();
	run();
	$("#questionsRow").delay(1000).fadeIn(3000);
	$("#questionGroup").delay(1000).fadeIn(3000);
	$("#headerRow").fadeOut(1000);
	// Displays question of the nth index value
	displayQuestion(index);
	
};

// This function runs every time the next crime button is clicked. Cycles through questions on the screen.
function nextCrime() {
	// Takes the checked radio buttons value and makes it a variable named userInput
	var userInput = $("input:checked").val();
	// Takes the question's answer that we are on in the cycle of the nth index value and saves it as a variable name of answer
	var answer = questionPool[index].answer;
	// Calculates the incorrect and correct answers by running through the CHECKED inputs. very important that it only checks the checked values, as that is how you get to calculate unanswered, because it will just label unanswered values as incorrect instead. 
	$("input:checked").each(function(){


		if (answer == userInput){
			correctAnswer++;
		}

		else {
			incorrectAnswer++;
		}
		// Calculates the unansweredAmount of questions by taking the total amount of questions and subtracting the correct and incorrect responses.
		unansweredAmount = questionPool.length - (correctAnswer + incorrectAnswer);
		console.log($(this).val());

	});

	index++;
	
	// Empty's the id so that the next question is the only one that appears
	$("#questionGroup").empty(); 

	// If there are no more questions when the next crime button is solved, then go to the results page. 
	if (index >= questionPool.length){
		solveTheCrime();
		
	}
	else{
		displayQuestion(index);
	}

	
};

// Function that is run when either the time runs out or the user makes it to the end of the quiz.
function solveTheCrime(){
	// Writes the amount of correctAnswers, incorrect answers, and unanswered questions on the dom
	$("#correctAnswerAmount").text(correctAnswer);
	$("#incorrectAnswerAmount").text(incorrectAnswer);
	$("#unansweredAmount").text(unansweredAmount);

	$("#questionGroup").fadeOut(1000);
	$("#questionsRow").hide();
	$("#resultsRow").delay(1000).fadeIn(1000);
	$("#resultsPage").delay(1000).fadeIn(1000);
	};

	// Event listeners for all the buttons. Different variations of the same goal
	$(document).on("click", "#suitUpButton", function(){
		suitUp();
	});

	$(document).on("click", "#resetTheCrimeButton", reset);

	$("#nextCrimeButton").on("click", nextCrime);

});



















