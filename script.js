console.log("Script started");

/* Questions objects should be formatted like this:
{
    question: "What is the capital of Arizona?",
    option1: "Tucson",
    option2: "Phoenix",
    option3: "Yuma",
    option4: "Flagstaff",
    answer: "Phoenix"
}
*/

// TODO: Create an array of objects to store the questions, options, and answer
let questions = [
    {
        question: "What is the capital of Arizona?",
        option1: "Tucson",
        option2: "Phoenix",
        option3: "Flagstaff",
        option4: "Oracle",
        answer: "Phoenix"
    },
    {
        question: "What is the new dumb number that people are obsessed with?",
        option1: "21",
        option2: "420",
        option3: "69",
        option4: "67",
        answer: "67"
    }
]

// TODO: Declare an empty array that will hold the user's answers
let userAnswers = [];

// TODO: Declare a variable to keep track of which question (index) we are on
let index = 0;

function showNextQuestion() {
    // Check answers
    if (index >= questions.length) {
        checkAnswers();
        return;
    }
    // TODO: Get the current question
    let currQuestion = questions[index];

    // TODO: Set the text of the question element
    let questionElement = document.getElementById("question");
    questionElement.innerText = currQuestion.question;

    // TODO: Set the text of each option element
    let option1Text = document.getElementById("option1text");
    option1Text.innerText = currQuestion.option1;

    let option2Text = document.getElementById("option2text");
    option2Text.innerText = currQuestion.option2;

    let option3Text = document.getElementById("option3text");
    option3Text.innerText = currQuestion.option3;

    let option4Text = document.getElementById("option4text");
    option4Text.innerText = currQuestion.option4;
}

// TODO: Call showNextQuestion to load the first question when the page loads
showNextQuestion();

function submitAnswer(event) {
    console.log("Submit clicked");
    // TODO: Prevent the form from reloading the page
    event.preventDefault();

    // Get the radio button input elements
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    // TODO: Get the current question
    let question = questions[index];

    // TODO: Use a conditional (if/else-if) to check which option was clicked and push the option text into the userAnswer array
    if (option1.checked) {
        console.log("Option1 picked");
        userAnswers.push(question.option1);
        option1.checked = false;
    }
    else if (option2.checked) {
        console.log("Option2 picked");
        userAnswers.push(question.option2);
        option2.checked = true;
    }
    else if (option3.checked) {
        console.log("Option3 picked");
        userAnswers.push(question.option3);
        option3.checked = false;
    }
    else if (option4.checked) {
        console.log("Option4 picked");
        userAnswers.push(question.option4);
        option4.checked = false;
    }
    else {
        alert("Select an answer before moving on");
        return;
    }
    
    // TODO: Add one to the question index
    index = index + 1;

    // TODO: Load the next question
    showNextQuestion();
}

function checkAnswers() {
    // TODO: Iterate through the user answers array and count how many are correct
    let  numCorrect = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        let userAnswer = userAnswers[i];
        let question = questions[i];
        if (userAnswer == question.answer) {
            numCorrect++;
        }
    }

    // TODO: Show an alert to the user with how many they got right out of the total
    alert("You got " + numCorrect + " out of " + questions.length + " correct");

    // TODO: Reset and start over
    index = 0;
    userAnswers = [];
    showNextQuestion();
}