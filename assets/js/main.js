// this is the starting point for this commentary,

// please add more steps

// there may be more steps and corrections to be made in future
console.log("Sam, your questions");
var startBtn = document.getElementById("start_btn")
var timerEl = document.getElementById("timer")

// need a collection of objects that hold the questions
let questions = [
  {
    ask: 'Commonly used data types DO NOT include:',
    answers: ['strings','booleans', 'alerts', 'numbers'],
    //ex can be the order in the array, name etc below uses array method and the answer will be option 2
    correctAnswer: 'strings'
  },
  {
    ask: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: ['JavaScript','terminal/bash', 'for loops', 'console log'],
    //ex can be the order in the array, name etc below uses array method and the answer will be option 2
    correctAnswer: 'console log'
  },
  {
    ask: 'String Values must be encolsed within _____ when being assigned to variables.',
    answers: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    //ex can be the order in the array, name etc below uses array method and the answer will be option 2
    correctAnswer: 'quotes'
  },
  {
    ask: 'Arrays in JavaScript can be used to store _____.',
    answers: ['numbers and strings','other arrays ', 'booleans', 'all of the above'],
    //ex can be the order in the array, name etc below uses array method and the answer will be option 2
    correctAnswer: 'all of the above'
  },
  {
    ask: 'A condition within an if/else statement is enclosed within _____.',
    answers: ['square brackets', 'parenthesis', 'curly brackets', 'quotes'],
    //ex can be the order in the array, name etc below uses array method and the answer will be option 2
    correctAnswer: 'curly brackets'
  },
  {
    ask: 'Question 6?',
    answers: ['option 1','option 2', 'option 3', 'option 5'],
    //ex can be the order in the array, name etc below uses array method and the answer will be option 2
    correctAnswer: 'option 2'
  },
];
var currentQ = 0;

function showQuestions() {
    //ex Select DOM element
    let askDiv = document.getElementById('ask_questions');

//ex modify DOM element
    askDiv.textContent = questions[currentQ].ask;

//excreating a variable and selecting by a query
    let optionOne = document.getElementById("option1")
    let optionTwo = document.getElementById("option2")
    let optionThree = document.getElementById("option3")
    let optionFour = document.getElementById("option4")
    
    optionOne.textContent = questions[currentQ].answers[0]
    optionTwo.textContent = questions[currentQ].answers[1]
    optionThree.textContent = questions[currentQ].answers[2]
    optionFour.textContent = questions[currentQ].answers[3]

  optionOne.addEventListener("click", checkAnswer)
}
//to call or return the question
// showQuestions(questions);
function checkAnswer(e) {
  console.log(e.target.textContent)

  currentQ++
  showQuestions()
}

// need to keep a count of the question that is displayed

// need to keep score

// need to keep the time


var timeLeft =90;

function startTimer(){

//Use the `setInterval()` method to call a function to be executed every

var timeInterval = setInterval(function () {
  // console.log(timeLeft);
  // subtract 1 second
  timeLeft--;
  timerEl.textContent = timeLeft;

  if(timeLeft === 0 || currentQ >= questions.length){
    // stop timer
    clearInterval(timeInterval);

    // call the displayMessage function
    endGame()
    displayMessage();
  }
  
}, 1000);
}

//If/When the timer ends the User will then be diverted to a final score page
//User will input initials on final score page
function endGame() {
  document.getElementById("container").setAttribute("class", "hidden")
  document.getElementById("high-scores").setAttribute("class", "")

}

//example of a function used for time interval
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}


function addQuestion(){
  // create the question elements

  // modify the text/attributes

  // modify one of the attributes to say right or wrong

  // append all elements to something on the page

  // for all the buttons, add event listener

    // WHEN I answer a question
    // if answered correctly
    // add points
    // show as correct
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // show as incorrect

    // after the answer, 
    // THEN I am presented with another question
    // need a function call to present the question

    // if no other questions,
    // go to highscore screen

   //ex (from r,p,s this code returns win and loss stats) 
   //ex window.alert(
        //ex "High Scores:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
      //ex );
 }

function startQuiz(){
  // timer starts and I am presented with a question
  // need a function call to start the timer 
  document.getElementById("startQuiz-text").setAttribute("class", "hidden")
  document.getElementById("container").setAttribute("class", "")
  startTimer()
  showQuestions()
  // need a function call to present the question
}


startBtn.addEventListener("click", startQuiz)
// eventListener here // when i click the start button

