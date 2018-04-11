"use strict";
/*jshint esversion: 6 */
/* jshint node: true */

const Alexa = require("alexa-sdk"); 



const questionArray = [
                      "The American President in 1928 was Herbert Hoover ? " ,
                      "The Wall Street Crash happened in 1941. " ,
                      "The Democrats won the elections in 1932. "
                    ];

const numberOfQuestions = questionArray.length;

const answerArray = [
                      true,
                      false,
                      true
                    ];

const possibleUserResponsesArray = [
                                    "Is the statement true or false ? ",
                                    "Is the statement correct or incorrect ? " +
                                    "Yes or no ? "
                                  ];

// To leave a note of where the application was
var memo = "The system just booted. This shouldnt happen.";
var arrayPosition = 0;
var score = 0;
var SSMLmediumBreak = "<break strength='medium' />";




var handlers = 
   {
    "LaunchRequest": function () {
      memo = "You just launched the app!";
      score = 0;
      arrayPosition = 0;
      this.response.speak(
                          "Hi, i am quiz rhino ! " + mediumBreak + 
                          "I can help you revise American History from the 1920's ." +
                          "If you'd like that, then just say please test my knowledge ? "
                          ).listen(
                                    "Let me repeat myself. If you'd like me to test your " +
                                    "American History knowledge, then just say 'please "+
                                    "test my knowledge'?"
                                  ); 
      this.emit(':responseReady');
    },"AMAZON.StopIntent": function () {
        memo = "You just stopped the app!";
        arrayPosition = 0;
        this.response.speak("Ok hope you had fun, goodbye!"); // add condition to leave or pause?
        this.emit(':responseReady');
    },"QuestionIntent": function () {//Yes everyone is well
        memo = "You are on question number " + numberOfQuestions;
        if(numberOfQuestions > arrayPosition){
            var say = questionArray[arrayPosition];
            arrayPosition++;
        }else{
            var say = "We have run out of flash cards for now! There were only " + numberOfQuestions+ ". I shall reset the questions and score,so that we can start again or you could ask me to stop for now.";
            arrayPosition = 0;
            score = 0;
        }
            this.response.speak(say).listen("I will repeat that again . . ."+say); 
            this.emit(':responseReady');
    },
      "SessionEndedRequest": function () {
          console.log(`Session ended in help state: ${this.event.request.reason}`);
    },"TrueFactIntent": function () {//If true
        memo = "You just answered true to the last question";
        var lastQuestion = arrayPosition - 1;
        var say;
        if(answerArray[lastQuestion] == true){
          var say = "That is correct, that was true";
          score++;
        }else{
          var say = "That is incorrect, that was actually false";
        }
        this.response.speak(say); 
        this.emit(':responseReady');
    },"FalseFactIntent": function () {//If true
        memo = "You just answered true to the last question";
        var lastQuestion = arrayPosition - 1;
        var say;
        if(answerArray[lastQuestion] == false){
          var say = "That is correct, that was false";
          score++;
        }else{
          var say = "That is incorrect, that was actually true";
        }
        this.response.speak(say); 
        this.emit(':responseReady');
    },"ScoreIntent": function () {//If true
        this.response.speak("your score is "+score); 
        this.emit(':responseReady');
    }
   };

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback){
  // Set up the Alexa object
  const alexa = Alexa.handler(event, context);
    // Register Handlers
    alexa.registerHandlers(handlers);
    // Start our Alexa code
    alexa.execute();
};


