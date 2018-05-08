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
        "In the context of the Cold War the acronym MAD stood for Mutually Assured Destruction and meant that with the development of ever more powerful nuclear weapons, if either side were to use them it was sure to lead to the end of life on earth.",
        "Sputnik was a USSR telecommunications satellite - the first man-made object in Space",
        "An important aspect of the Cold War was the Space Race - the competition between the USA and USSR to take control of Space. After the USSR put the first man in Space in 1961, the US President John F Kennedy challenged Americans to put a man on the moon by the end of the decade, which they did in 1969.",
        "The primary objective of NATO (North Atlantic Treaty Organisation) was to resist an attack by the USSR on the USA or its Allies in Western Europe based on the principle that an attack on one of its members was an attack on all of them."
        ];
        
        return contextArray;
    }

};