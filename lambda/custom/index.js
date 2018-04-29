"use strict";
/*jshint esversion: 6 */
/* jshint node: true */

const Alexa = require("alexa-sdk");
const Question = require("./question.js");
const Prompt = require("./prompts.js");

const questionArray = Question.returnAllQuestions();
const answerArray = Question.returnAllAnswers();
const possibleUserResponsesArray = Prompt.returnAllQuesPrompts();

const numberOfQuestions = questionArray.length;

// Use memo as a pointer for user to happened last time
var memo = "Quiz Rhino just restarted!";
var say = memo;
var arrayPosition = 0;
var score = 0;
var ssmlMediumBreak = "<break strength='medium' />";
const helpMessage = "If you are confused or need help, then tell Alexa to ask Quiz Rhino for help!";
const memoPrefix = "You asked ";


var handlers = {
  "LaunchRequest": function() {
    memo = "Launched Quiz Rhino!" + helpMessage;
    say = "Hi, welcome to Quiz Rhino ! " + ssmlMediumBreak +
          "I will help you revise American History from the 1920's !" +
          "If you'd like that, then just say ask me a question !"+
          "Otherwise " + helpMessage;
    score = 0;
    arrayPosition = 0;
    this.response.speak(say).listen("Let me repeat myself ." + say );
    this.emit(':responseReady');
  },
  "AMAZON.HelpIntent": function () { 
    memo = "Just asked for help but before that, " + memoPrefix + memo;
    say = " You can tell Alexa to launch or stop quiz rhino, " +
          " to start or alternatively, to stop the app. " +
          " For example, saying; Alexa! Stop quiz rhino will stop " +
          " the app";   
    this.response.speak(say);
    this.emit(':responseReady');
  },
  "AMAZON.StopIntent": function() {
    memo = "Just asked to stop the app!";
    say = "i hope this was a good experience! goodbye!"
    score = 0; 
    arrayPosition = 0;
    this.response.speak(say);
    this.emit(':responseReady');
  },
  "AMAZON.NextIntent": function() {  //Intent has been extended for user
    memo = "You are on question number " + numberOfQuestions;
    if (numberOfQuestions > arrayPosition) {
      var say = questionArray[arrayPosition];
      arrayPosition++;
    } else {
      var say = "We have run out of flash cards for now! There were only " + numberOfQuestions + ". I shall reset the questions and score,so that we can start again or you could ask me to stop for now.";
      arrayPosition = 0;
      score = 0;
    }
    this.response.speak(say).listen("I will repeat that again . . ." + say);
    this.emit(':responseReady');
  },
  "SessionEndedRequest": function() {
    console.log(`Session ended in help state: ${this.event.request.reason}`);
  },
  "TrueFactIntent": function() { //If true
    memo = "You just answered true to the last question";
    var lastQuestion = arrayPosition - 1;
    var say;
    if (answerArray[lastQuestion] == true) {
      var say = "That is correct, that was true";
      score++;
    } else {
      var say = "That is incorrect, that was actually false";
    }
    this.response.speak(say);
    this.emit(':responseReady');
  },
  "FalseFactIntent": function() { //If true
    memo = "You just answered true to the last question";
    var lastQuestion = arrayPosition - 1;
    var say;
    if (answerArray[lastQuestion] == false) {
      var say = "That is correct, that was false";
      score++;
    } else {
      var say = "That is incorrect, that was actually true";
    }
    this.response.speak(say);
    this.emit(':responseReady');
  },
  "ScoreIntent": function() { //If true
    this.response.speak("your score is " + score);
    this.emit(':responseReady');
  }
};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Set up the Alexa object
  const alexa = Alexa.handler(event, context);
  // Register Handlers
  alexa.registerHandlers(handlers);
  // Start our Alexa code
  alexa.execute();
};