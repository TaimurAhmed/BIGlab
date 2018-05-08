'use strict';

module.exports = {

    returnAllQuestions: function() {
        const questionArray = [
            "In the context of the Cold War, the acronym MAD stands for Mutually Assured Destruction?",
            "The Sputnik was a popular type of submarine used by the former USSR",
            "In 1961 US president, John F Kennedy , challenged the USA to put a man on the moon by the end of the decade",
            "The primary reason behind the creation of NATO was to enable economic coperation between the allies and Germany"
        ];
        
        return questionArray;
    },
    returnAllAnswers: function() {
        const answerArray = [
            true,
            false,
            true,
            false
        ];
        
        return answerArray;
    },
    returnAllContext: function(){
        const contextArray = [

        ];
        
        return contextArray;
    };

};