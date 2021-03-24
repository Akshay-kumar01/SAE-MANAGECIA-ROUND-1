
var myQuestions = [
    {
      question: "Question 1 : When P alone works, he takes 25 more days than the time taken by P and Q working together to complete the work. But Q alone takes 9 days more than the time taken by P and Q to together complete the work. In what time P and Q together finish this work?",
      answers: {
        a: '28',
        b: '17',
        c: '18',
        d: '15'
      },
      correctAnswer: 'd'
    },
    {
      question: "Question 2 : When P alone works, he takes 25 more days than the time taken by P and Q working together to complete the work. But Q alone takes 9 days more than the time taken by P and Q to together complete the work. In what time P and Q together finish this work?",
      answers: {
        a: '3',
        b: '5',
        c: '10',
        d: '23'
      },
      correctAnswer: 'c'
    },
    {
        question: "Question 3 : When P alone works, he takes 25 more days than the time taken by P and Q working together to complete the work. But Q alone takes 9 days more than the time taken by P and Q to together complete the work. In what time P and Q together finish this work?",
        answers: {
          a: '28',
          b: '17',
          c: '18',
          d: '15'
        },
        correctAnswer: 'd'
      },
      {
        question: "Question 4 : When P alone works, he takes 25 more days than the time taken by P and Q working together to complete the work. But Q alone takes 9 days more than the time taken by P and Q to together complete the work. In what time P and Q together finish this work?",
        answers: {
          a: '28',
          b: '17',
          c: '18',
          d: '15'
        },
        correctAnswer: 'd'
      },
      {
        question: "Question 5 : When P alone works, he takes 25 more days than the time taken by P and Q working together to complete the work. But Q alone takes 9 days more than the time taken by P and Q to together complete the work. In what time P and Q together finish this work?",
        answers: {
          a: '28',
          b: '17',
          c: '18',
          d: '15'
        },
        correctAnswer: 'd'
      }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }

  document.getElementById('timer').innerHTML =
  120 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}