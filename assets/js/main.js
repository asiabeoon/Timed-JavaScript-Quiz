// this is the starting point for this commentary,

// please add more steps

// there may be more steps and corrections to be made in future
console.log("Sam, your questions");

// need a collection of objects that hold the questions
let questions = {
    ask: 'Question?',
    answers: ['option 1','option 2', 'option 3', 'option 5'],
    //ex can be the order in the array, name etc below uses array method and the answer will be option 2
correctAnswer: 1 
} ;

function showQuestions(q) {
    //ex Select DOM element
    let askDiv = document.getElementById('ask');

//ex modify DOM element
    askDiv.textContent = q.ask;

//excreating a variable and selecting by a query
    let alts = document.querySelectorAll('.alternative');
    
    alts.forEach(function(element, index){
        element.textContent = q.answers[index];
    });
}
//to call or return the question
showQuestions(questions);


// need to keep a count of the question that is displayed

// need to keep score

// need to keep the time


function startTimer(){

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

  // need a function call to present the question
}

// eventListener here // when i click the start button

