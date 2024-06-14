//DOM loads before running game
/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function () {
    let questionNumber = 0;
    displayQuestion(questionNumber);

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            const buttonType = this.getAttribute("data-type");
            if (buttonType === "A" || buttonType === "B" || buttonType === "C" || buttonType === "D") {
                checkAnswer(buttonType, questionNumber);
                if (questionNumber === quizQuestions.length - 1) {
                    setFinalText();
                }
                questionNumber++;
                if (questionNumber >= buttons.length){
                    displayQuestion(questionNumber);
                }
            }
        });
    }

});

function displayQuestion(questionNumber) {
    document.getElementById("question-text").innerHTML = quizQuestions[questionNumber].question;
    document.getElementById("answer-a-text").innerHTML = quizQuestions[questionNumber].choices[0];
    document.getElementById("answer-b-text").innerHTML = quizQuestions[questionNumber].choices[1];
    document.getElementById("answer-c-text").innerHTML = quizQuestions[questionNumber].choices[2];
    document.getElementById("answer-d-text").innerHTML = quizQuestions[questionNumber].choices[3];
}

function checkAnswer(userAnswer, questionNumber) {
    let isCorrect = userAnswer === quizQuestions[questionNumber].correctLetter;

    if (isCorrect) {
        incrementScore();
        alert("Congratulations! You got the right answer");
    } else {
        incrementWrongAnswer();
        let correctAnswer = quizQuestions[questionNumber].correctAnswer;
        let correctLetter = quizQuestions[questionNumber].correctLetter;
        alert(`Your answer ${userAnswer} is incorrect. The correct answer was ${correctLetter}: ${correctAnswer}`);
    }

}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function setFinalText() {
    let finalScore = document.getElementById("score").innerText;
    let finalIncorrect = document.getElementById("incorrect").innerText;
    let finalText = `Congratulations! You got a final score of ${finalScore} and got ${finalIncorrect} incorrect.`;
    document.getElementById("question-text").innerHTML = finalText;
    document.getElementById("answer-a-text").innerHTML = "";
    document.getElementById("answer-b-text").innerHTML = "";
    document.getElementById("answer-c-text").innerHTML = "";
    document.getElementById("answer-d-text").innerHTML = "";
    document.getElementById("ans-btn-a").disabled = true;
    document.getElementById("ans-btn-b").disabled = true;
    document.getElementById("ans-btn-c").disabled = true;
    document.getElementById("ans-btn-d").disabled = true;
}

// Questions for trivia - sourced from watercoolertrivia.com

const quizQuestions = [
    {
        question: `A deal is made to make Washington, DC the nation's new capital in "The Room Where It Happens," a song in what smash hit Broadway musical ?`,
        choices: ["A: Hamilton", "B: Rent", "C: West Side Story", "D: Grease"],
        correctLetter: "A",
        correctAnswer: "Hamilton"
    },
    {
        question: `Which Broadway musical featured characters singing about how they couldn't afford to pay their New York City landlord?`,
        choices: ["A: 42nd Street", "B: Rent", "C: Grease", "D: Annie"],
        correctLetter: "B",
        correctAnswer: "Rent"
    },
    {
        question: `"___: You're the One that I Want" was a 2007 reality competition show to cast the lead roles of Danny and Sandy in a Broadway musical revival. What musical's one-word title goes in the blank?`,
        choices: ["A: Little shop of Horrors", "B: Rent", "C: Grease", "D: Jersey Boys"],
        correctLetter: "C",
        correctAnswer: "Grease"
    },
    {
        question: `Named for a major Midwestern city, what long-running Broadway musical features songs like "All That Jazz," "Cell Block Tango," and "Mr. Cellophane?"`,
        choices: ["A: New York", "B: Seattle", "C: Baltimore", "D: Chicago"],
        correctLetter: "D",
        correctAnswer: "Chicago"
    },
    {
        question: `What classic Broadway musical, adapted for film in 1961 and again in 2021, features warring New York City gangs known as the Jets and the Sharks?`,
        choices: ["A: North Side Story", "B: South Side Story", "C: West Side Story", "D: East Side Story"],
        correctLetter: "C",
        correctAnswer: "West Side Story"
    },
    {
        question: `With over 10,000 performances, what spooky performance is the longest running show in Broadway history?`,
        choices: ["A: Rocky Horror", "B: Carrie", "C: Beetlejuice", "D: Phantom of the Opera"],
        correctLetter: "D",
        correctAnswer: "Phantom of the Opera"
    },
    {
        question: `Running on Broadway from 2005 to 2017, what musical tells the story of Frankie Valli and the Four Seasons and features songs like "Sherry" and "Big Girls Don't Cry?"`,
        choices: ["A: Les Miserables", "B: Jersey Boys", "C: Hairspray", "D: Kinky Boots"],
        correctLetter: "B",
        correctAnswer: "Jersey Boys"
    },
    {
        question: `The smash Broadway hit "Hamilton" is staged in a theater named for what legendary songwriting partner of Oscar Hammerstein?`,
        choices: ["A: Richard Rodgers", "B: Lin Manuel Miranda", "C: Andrew Lloyd Webber", "D: Katy Perry"],
        correctLetter: "A",
        correctAnswer: "Richard Rodgers"
    },
    {
        question: `"The rain in Spain stays mainly in the plain" is a famous lyric from what classic Broadway musical by Lerner and Loewe?`,
        choices: ["A: Frozen", "B: My Fair Lady", "C: Funny Girl", "D: 42nd Street"],
        correctLetter: "B",
        correctAnswer: "My Fair Lady"
    },
    {
        question: `What 1959 Broadway musical is based on the Hans Christian Andersen fairy tale "The Princess and the Pea?"`,
        choices: ["A: Once Upon a Time", "B: Once Upon a Dream", "C: Once Upon a Mattress", "D: Wicked"],
        correctLetter: "C",
        correctAnswer: "Once Upon a Mattress"
    },
    {
        question: `Played by Frank Sinatra in a film version, Nathan Detroit is a gambling boss in what classic 1950s Broadway musical?`,
        choices: ["A: Singin in the Rain", "B: Guys and Dolls", "C: Casablanca", "D: Chicago"],
        correctLetter: "B",
        correctAnswer: "Guys and Dolls"
    },
    {
        question: `Elder Price dreams of being sent to Orlando for his Latter-Day Saints mission, but is instead sent to Uganda, in what hit Broadway musical that debuted in 2011?`,
        choices: ["A: Hamilton", "B: Jesus Christ Superstar", "C: The Book of Mormon", "D: School of Rock"],
        correctLetter: "C",
        correctAnswer: "The Book of Mormon"
    },
    {
        question: `The musical film 'Mamma Mia', portrays the story with the use of which band's songs?`,
        choices: ["A: ABBA", "B: Queen", "C: Boney M", "D: Coldplay"],
        correctLetter: "A",
        correctAnswer: "ABBA"
    },
    {
        question: `Which musical film stars Doris Day as a cowgirl in the Wild West?`,
        choices: ["A: Calamity Sue", "B: Calamity Sarah", "C: Calamity Jane", "D: Calamity Laura"],
        correctLetter: "C",
        correctAnswer: "Calamity Jane"
    },
    {
        question: `How many minutes do the cast of 'Rent' sing about?`,
        choices: ["A: 123,456", "B: one million", "C: 999", "D: 525,600"],
        correctLetter: "D",
        correctAnswer: "525,600"
    }
];
