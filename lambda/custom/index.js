"use strict";
/*jshint esversion: 6 */
/* jshint node: true */

const Alexa = require("alexa-sdk");
const Question = require("./question.js");
const Prompt = require("./prompts.js");

const questionArray = Question.returnAllQuestions();
const answerArray = Question.returnAllAnswers();
const contextArray = Question.returnAllContext();
const possibleUserResponsesArray = Prompt.returnAllQuesPrompts();

const numberOfQuestions = questionArray.length;

// Use memo as a pointer for user to happened last time
var memo = "Quiz Rhino just restarted!";
var lastQuestionMemo = "No questions asked yet";
var say = memo;
var arrayPosition = 0;
var answerArrayPos = 0;
var score = 0;
const ssmlMediumBreak = "<break strength='medium' />";
const helpMessage = "If you are confused or need help, then tell Alexa to ask Quiz Rhino for help!";
const memoPrefix = "You asked ";
const runOutMsg = "We have run out of flash cards for now!";


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
    if (numberOfQuestions > arrayPosition) {
        memo = lastQuestionMemo = say = questionArray[arrayPosition];
        arrayPosition++;
    } else {
        memo = lastQuestion= say = "We have run out of flash cards for now! " +
                                    "There were only " + numberOfQuestions + 
                                    " . I shall reset the questions and score, " +
                                    " so that we can start again or you could ask " +
                                    " me to stop for now.";
        arrayPosition = 0;
        score = 0;
    }
    
    this.response.speak(say);
    this.emit(':responseReady');
  },
  "SessionEndedRequest": function() {
    console.log(`Session ended in help state: ${this.event.request.reason}`);
  },
  "AMAZON.YesIntent": function() { 
    this.response.speak(trueOrFalse(true));
    this.emit(':responseReady');
  },
  "AMAZON.NoIntent": function() {
    this.response.speak(trueOrFalse(false));
    this.emit(':responseReady');
  },
  "ScoreIntent": function() {
    this.response.speak("your score is " + score);
    this.emit(':responseReady');
  }
};

function trueOrFalse(userIntentBool){
   memo = "You just answered " + String(userIntentBool) + 
          ", for the last question";
  var correctAnswer = answerArray[answerArrayPos];

    if (arrayPosition > numberOfQuestions){
        say = runOutMsg;
    }else if (correctAnswer == userIntentBool) {
        say = "That is correct, that fact was " + correctAnswer + 
              " so you win a point!";
        score++;
    } else {
        say = "That is incorrect, that fact was actually " + correctAnswer + 
              ". You dont get any points!";
    }
    answerArrayPos++;
    return say;
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