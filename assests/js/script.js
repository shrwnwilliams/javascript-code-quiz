// dom variables
var questionArea = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var answerContainer = document.getElementById("options-container");
var timerArea = document.getElementById("timer");
var startScreen = document.querySelector("start-screen");
var startButton = document.querySelector("#start-button");
var answerButtons = document.querySelectorAll(".option");
var answerButtonOne = document.getElementById("option-one");
var answerButtonTwo = document.getElementById("option-two");
var answerButtonThree = document.getElementById("option-three");
var answerButtonFour = document.getElementById("option-four");

// javascript variables
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["alerts", "strings", "booleans", "numbers"],
    correctAnswer: 0,
  },
  {
    question: "The condition in an if / else statement is enclosed within _____.",
    options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: 2
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: 2
  },
  {
    question: "A very useful tool used during the development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "console.log", "terminal / bash", "for loops"],
    correctAnswer: 1
  },
];

questionTitle.textContent = questions[0].question;
answerButtonOne.textContent = questions[0].options[0];
answerButtonTwo.textContent = questions[0].options[1];
answerButtonThree.textContent = questions[0].options[2];
answerButtonFour.textContent = questions[0].options[3];

// function definitions

// event listeners
answerContainer.addEventListener("click", function(event) {
    var optionTarget = event.target;

    if (optionTarget.matches("button")) {
        ;
    }
})

startButton.addEventListener("click", function() {
    questionArea.setAttribute("style", "display:initial");
})
// functions calls

// answerButtonOne.addEventListener("click", function() {
//     count++;
//     setCounterText();
//   }
// );
