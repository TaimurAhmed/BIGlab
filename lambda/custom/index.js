"use strict";

var Alexa = require("alexa-sdk");

// To leave a note of where the application was
var memo = "The application was either just launched or for some reason" +
           "the cloud rebooted ... sorry but start again";

var questionArray = [
                      "The American President in 1928 was Herbert Hoover ?" ,
                      "The Wall Street Crash happened in 1941." ,
                      "The Democrats won the elections in 1932."
                    ];

var answerArray = [
                      true,
                      false,
                      true
                  ];

var possibleUserResponsesArray = [
                                    "Is the statement true or false ?",
                                    "Is the statement correct or incorrect ?"
                                    "Yes or no ?"
                                  ];

var listPosition = 0;// Position in list of questions
var numberOfQuestions = questionArray.length;
var score = 0;



// The handlers object tells Alexa how to handle various actions
var handlers = {
  "LaunchRequest": function () { //When app launches do this
    memo = "You just launched history monkey!";
    score = 0;
    listPosition = 0;
    this.response.speak("Hi, i am history monkey ! <break strength='medium' /> I can help you revise American History from the 1920's. If you'd like that, then just say please test my knowledge?").listen("Let me repeat myself. If you'd like me to test your American History knowledge, then just say 'please test my knowledge'?"); 
    this.emit(':responseReady');
  },"AMAZON.StopIntent": function () {//Stop app
    memo = "You just stopped the app";
    listPosition = 0;
    this.response.speak("Ok hope you had fun, goodbye!"); 
    this.emit(':responseReady');
  },"QuestionIntent": function () {//Yes everyone is well
    memo = "You are on question number " + numberOfQuestions;
    if(numberOfQuestions > listPosition){
        var say = questionArray[listPosition];
        listPosition++;
    }else{
        var say = "We have run out of flash cards for now! There were only " + numberOfQuestions+ ". I shall reset the questions and score,so that we can start again or you could ask me to stop for now.";
        listPosition = 0;
        score = 0;
    }
        this.response.speak(say).listen("I will repeat that again . . ."+say); 
        this.emit(':responseReady');
  },
    "SessionEndedRequest": function () {
        console.log(`Session ended in help state: ${this.event.request.reason}`);
  },"TrueFactIntent": function () {//If true
      memo = "You just answered true to the last question";
      var lastQuestion = listPosition - 1;
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
      var lastQuestion = listPosition - 1;
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
  var alexa = Alexa.handler(event, context);
    // Register Handlers
    alexa.registerHandlers(handlers);
    // Start our Alexa code
    alexa.execute();
};


