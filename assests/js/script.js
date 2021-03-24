// dom variables
var questionArea = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var answerContainer = document.getElementById("options-container");
var wrongOrRight = document.getElementById("wrong-or-right");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var highScoreButton = document.getElementById("highscore-submit");
var initialsInput = document.getElementById("initials-input");
var scoreCard = document.getElementById("score-card");
var timerArea = document.getElementById("timer");
var startScreen = document.querySelector("#start-screen");
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
    correctAnswer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within _____.",
    options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during the development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "console.log", "terminal / bash", "for loops"],
    correctAnswer: "console.log",
  },
];

var index = 0;

var gameTime = 60;

// function definitions
function displayQuestion() {
  questionTitle.textContent = questions[index].question;
  answerButtonOne.textContent = questions[index].options[0];
  answerButtonTwo.textContent = questions[index].options[1];
  answerButtonThree.textContent = questions[index].options[2];
  answerButtonFour.textContent = questions[index].options[3];
}

function saveScore() {
  var userInitials = initialsInput.value.trim();

  if (userInitials) {
    var scoreList = JSON.parse(localStorage.getItem("scoreList")) || [];
    var newScore = {
      score: gameTime,
      initials: userInitials,
    };
    scoreList.push(newScore);
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
  }
  displayScore();
}

function displayScore() {
  var scoreList = JSON.parse(localStorage.getItem("scoreList")) || [];
  for (var i = 0; i < scoreList.length; i++) {
    var scoreItem = document.createElement("li");
    scoreItem.textContent = scoreList[i].score + " - " + scoreList[i].initials;
    scoreCard.appendChild(scoreItem);
  }
}

function startGameTime() {
  timer = setInterval(function () {
    timerArea.textContent = gameTime;
    gameTime--;
    if (gameTime === 0) {
      endGame();
      clearInterval(timer);
    }
  }, 1000);
}

function endGame() {
  questionArea.classList.remove("questions");
  questionArea.classList.add("hide");
  endScreen.classList.remove("hide");
  endScreen.classList.add("end-screen");
  finalScore.textContent = gameTime;
  timerArea.textContent = "";
  clearInterval(timer);
}

// event listeners
answerContainer.addEventListener("click", function (event) {
  var optionTarget = event.target;
  var userChoice = event.target.textContent;

  if (optionTarget.matches("button")) {
    if (userChoice === questions[index].correctAnswer) {
      wrongOrRight.textContent = "Correct!";
    } else {
      gameTime = gameTime - 10;
      wrongOrRight.textContent = "Wrong!";
    }
    if (index < questions.length - 1) {
      index++;
      displayQuestion();
    } else {
      endGame();
    }
  }
});

highScoreButton.addEventListener("click", saveScore);

startButton.addEventListener("click", function () {
  displayQuestion();
  startGameTime();
  questionArea.classList.remove("hide");
  questionArea.classList.add("questions");
  startScreen.setAttribute("style", "display:none");
});
