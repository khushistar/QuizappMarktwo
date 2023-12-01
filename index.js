var readlineSync = require("readline-sync")
var question = readlineSync.question("What's your name? ")
var score = 0

function playQuiz(question, answer) {
  var question = readlineSync.question(question)
  if (question === answer) {
    console.log("You are right")
    score = score + 1
    console.log(score)
  } else {
    console.log("You are wrong")
  }
}

var questionlist = [
  {
    question: "Where is Captain America from? ",
    answer: "Brooklyn"
  },
  {
    question: "Who is Tony Stark’s father? ",
    answer: "Howard Stark."
  },
  {
    question: "Who rescued Tony Stark and Nebula from space? ",
    answer: "Captain Marvel."
  },
  {
    question: "What is Tony Stark's daughter's name? ",
    answer: "Morgan Stark."
  },
]

for (var i = 0; i < questionlist.length; i = i + 1) {
  playQuiz(questionlist[i].question, questionlist[i].answer)
}

console.log("Final Score " + score)
