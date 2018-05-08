'use strict';

module.exports = {

    returnAllQuestions: function() {
        const questionArray = [
            "In the context of the Cold War, the acronym MAD stands for Mutually Assured Destruction?",
            "The Sputnik was a popular type of submarine used by the former USSR",
            "In 1961 US president, John F Kennedy , challenged the USA to put a man on the moon by the end of the decade",
            "The primary reason behind the creation of NATO was to enable economic coperation between the allies and Germany",
            "The Moscow Pact refers to ; he name of the organisation set up by the Soviet Union to unite the countries of Eastern Europe in a defence pact",
            "The Hungarian Uprising began in 1956",
            "Rakosi was hungarian leader who proposed liberal reforms for the communist country of Hungary",
            "Stalin ordered  crackdown on the Hungarians when it was suggested they might leave the Warsaw Pact?",
            "U2 in the context of the cold war refers to a cryptography protocol used to encrypt Soviet messages to overseas agents",
            "The Test Ban Treaty, was discussed during the Paris Summit in May 1960"

        ];
        
        return questionArray;
    },
    returnAllAnswers: function() {
        const answerArray = [
            true,
            false,
            true,
            false,
            false,
            true,
            false,
            false,
            false,
            true

        ];
        
        return answerArray;
    },
    returnAllContext: function(){
        const contextArray = [
        "In the context of the Cold War the acronym MAD stood for Mutually Assured Destruction and meant that with the development of ever more powerful nuclear weapons, if either side were to use them it was sure to lead to the end of life on earth",
        "Sputnik was a USSR telecommunications satellite - the first man-made object in Space",
        "An important aspect of the Cold War was the Space Race - the competition between the USA and USSR to take control of Space. After the USSR put the first man in Space in 1961, the US President John F Kennedy challenged Americans to put a man on the moon by the end of the decade, which they did in 1969",
        "The primary objective of NATO (North Atlantic Treaty Organisation) was to resist an attack by the USSR on the USA or its Allies in Western Europe based on the principle that an attack on one of its members was an attack on all of them",
        "The Warsaw Pact was an alliance of the Soviet Union and its satellite states in Eastern Europe for their mutual defence",
        "The Hungarian Uprising began in 1956 and was crushed by the Soviet Red Army",
        "The Hungarian leader who proposed liberal reforms to the country's communist regime was Imre Nagy",
        "Khruschev ordered Soviet troops into Hungary when it was suggested it might leave the Warsaw Pact",
        "The U2 was an American spy plane - one was shot down while on a mission over the Soviet Union in May 1960 causing a diplomatic crisis",
        "With both the USA and the USSR aware of the destructive capabilities of nuclear weapons, the Paris Summit was meant to end in a Test Ban Treaty, meaning restrictions on the testing of nuclear weapons"
        ];
        
        return contextArray;
    }

};