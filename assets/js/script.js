//DOM loads before running game

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                vheckAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }

});

function runGame() {

}

function checkAnswer() {
let userAnswer = paraseInt(document.getElementById("correctAnswer").value)
let isCorrect = userAnswer === correctAnswer[0];

if (isCorrect) {
    alert(Congratulations! You got the right answer);
} else {
    alert(Your answer $(userAnswer) is incorrect. The correct answer was $(correctAnswer))
}

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayQuestion() {
    const question = quizQuestions
    
}

// Questions for trivia - sourced from watercoolertrivia.com

const quizQuestions = [

question: `A deal is made to make Washington, DC the nation's new capital in "The Room Where It Happens," a song in what smash hit Broadway musical ?`;
choices: ["A: Hamilton", "B: Rent", "C: West Side Story", "D: Grease"];
correctAnswer: "A: Hamilton";


question: `Which Broadway musical featured characters singing about how they couldn't afford to pay their New York City landlord?`;
choices: ["A: 42nd Street", "B: Rent", "C: Grease", "D: Annie"];
correctAnswer: "B: Rent";


question: `"___: You're the One that I Want" was a 2007 reality competition show to cast the lead roles of Danny and Sandy in a Broadway musical revival. What musical's one-word title goes in the blank?`;
choices: ["A: Little shop of Horrors", "B: Rent", "C: Grease", "D: Jersey Boys"];
correctAnswer: "C: Grease";


question: `Named for a major Midwestern city, what long-running Broadway musical features songs like "All That Jazz," "Cell Block Tango," and "Mr. Cellophane?"`;
choices: ["A: New York", "B: Seattle", "C: Baltimore", "D: Chicago"];
correctAnswer: "D: Chicago";


question: `What classic Broadway musical, adapted for film in 1961 and again in 2021, features warring New York City gangs known as the Jets and the Sharks?`;
choices: ["A: North Side Story", "B: South Side Story", "C: West Side Story", "D: East Side Story"];
correctAnswer: "C: West Side Story";


question: `With over 10,000 performances, what spooky performance is the longest running show in Broadway history?`;
choices: ["A: Rocky Horror", "B: Carrie", "C: Beetlejuice", "D: Phantom of the Opera"];
correctAnswer: "D: Phantom of the Opera";


question: `Running on Broadway from 2005 to 2017, what musical tells the story of Frankie Valli and the Four Seasons and features songs like "Sherry" and "Big Girls Don't Cry?"`;
choices: ["A: Les Miserables", "B: Jersey Boys", "C: Hairspray", "D: Kinky Boots"];
correctAnswer: "B: Jersey Boys";

question: `The smash Broadway hit "Hamilton" is staged in a theater named for what legendary songwriting partner of Oscar Hammerstein?`;
choices: ["A: Richard Rodgers", "B: Lin Manuel Miranda", "C: Andrew Lloyd Webber", "D: Katy Perry"];
correctAnswer: "A: Richard Rodgers";

question: `"The rain in Spain stays mainly in the plain" is a famous lyric from what classic Broadway musical by Lerner and Loewe?`;
choices: ["A: Frozen", "B: My Fair Lady", "C: Funny Girl", "D: 42nd Street"];
correctAnswer: "B: My Fair Lady";

question: `What 1959 Broadway musical is based on the Hans Christian Andersen fairy tale "The Princess and the Pea?"`;
choices: ["A: Once Upon a Time", "B: Once Upon a Dream", "C: Once Upon a Mattress", "D: Wicked"];
correctAnswer: "C: Once Upon a Mattress";

question: `Played by Frank Sinatra in a film version, Nathan Detroit is a gambling boss in what classic 1950s Broadway musical?`;
choices: ["A: Singin in the Rain", "B: Guys and Dolls", "C: Casablanca", "D: Chicago"];
correctAnswer: "B: Guys and Dolls";

question: `Elder Price dreams of being sent to Orlando for his Latter-Day Saints mission, but is instead sent to Uganda, in what hit Broadway musical that debuted in 2011?`;
choices: ["A: Hamilton", "B: Jesus Christ Superstar", "C: The Book of Mormon", "D: School of Rock"];
correctAnswer: "C: The Book of Mormon";

question: `The musical film 'Mamma Mia', portrays the story with the use of which band's songs?`;
choices: ["A: ABBA", "B: Queen", "C: Boney M", "D: Coldplay"];
correctAnswer: "A: ABBA";

question: `Which musical film stars Doris Day as a cowgirl in the Wild West?`;
choices: ["A: Calamity Sue", "B: Calamity Sarah", "C: Calamity Jane", "D: Calamity Laura"];
correctAnswer: "C: Calamity Jane";

question: `How many minutes do the cast of 'Rent' sing about?`;
choices: ["A: 123,456", "B: one million", "C: 999", "D: 525,600"];
correctAnswer: "D: 525,600";

]
