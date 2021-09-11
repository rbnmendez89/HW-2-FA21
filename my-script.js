var questionNumber = 0;
var score = 0;
var selectedChoices = ['', '', '', '', '', '', '', '', '', '']

var questions = [
    {
        'question': 'What is the full form of HTML ?',
        'choiceA': 'Hyper text markup language',
        'choiceB': 'Hyper transform mark linguist',
        'choiceC': 'Homo text mark language',
        'choiceD': 'All of these',
        'correct': 'choiceA'
    },
    {
        'question': 'Arrange in ascending order the units of memory TB, KB, GB, MB',
        'choiceA': 'TB>MB>GB>KB',
        'choiceB': 'MB>GB>TB>KB',
        'choiceC': 'TB>GB>MB>KB',
        'choiceD': 'All of these',
        'correct': 'choiceC'
    },
    {
        'question': 'Eight Bits make up a ?',
        'choiceA': 'byte',
        'choiceB': 'megabyte',
        'choiceC': 'kilobyte',
        'choiceD': 'All of these',
        'correct': 'choiceA'
    },
    {
        'question': 'Which of the following is a correct format of Email address ?',
        'choiceA': 'name@website@info',
        'choiceB': 'name@website.info',
        'choiceC': 'www.nameofebsite.com',
        'choiceD': 'All of these',
        'correct': 'choiceB'
    },
    {
        'question': 'What is the full form of HTML ?',
        'choiceA': 'Hyper text markup language',
        'choiceB': 'Hyper transform mark linguist',
        'choiceC': 'Homo text mark language',
        'choiceD': 'All of these',
        'correct': 'choiceA'
    },
    {
        'question': 'Arrange in ascending order the units of memory TB, KB, GB, MB',
        'choiceA': 'TB>MB>GB>KB',
        'choiceB': 'MB>GB>TB>KB',
        'choiceC': 'TB>GB>MB>KB',
        'choiceD': 'All of these',
        'correct': 'choiceC'
    },
    {
        'question': 'Eight Bits make up a ?',
        'choiceA': 'byte',
        'choiceB': 'megabyte',
        'choiceC': 'kilobyte',
        'choiceD': 'All of these',
        'correct': 'choiceA'
    },
    {
        'question': 'Which of the following is a correct format of Email address ?',
        'choiceA': 'name@website@info',
        'choiceB': 'name@website.info',
        'choiceC': 'www.nameofebsite.com',
        'choiceD': 'All of these',
        'correct': 'choiceB'
    },
    {
        'question': 'What is the full form of HTML ?',
        'choiceA': 'Hyper text markup language',
        'choiceB': 'Hyper transform mark linguist',
        'choiceC': 'Homo text mark language',
        'choiceD': 'All of these',
        'correct': 'choiceA'
    },
    {
        'question': 'Arrange in ascending order the units of memory TB, KB, GB, MB',
        'choiceA': 'TB>MB>GB>KB',
        'choiceB': 'MB>GB>TB>KB',
        'choiceC': 'TB>GB>MB>KB',
        'choiceD': 'All of these',
        'correct': 'choiceC'
    }
]
function next(event) {
    event.preventDefault();
    questionNumber++;
    clearChoices();
    getQuestion();
}
function init() {
    getQuestion();
    document.getElementById('choices').addEventListener('click', function (event) {
        const radioButtons = document.querySelectorAll('input[name="choices"]');
        let selectedValue;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedValue = radioButton.value;
                break;
            }
        }
        selectedChoices[questionNumber] = selectedValue;
        calculateScore();
    });

}

init();

function getQuestion() {
    if (questionNumber >= questions.length) {
        const btn = document.getElementsByClassName('btn')[0];
        btn.style.display = "none";
        return;
    }
    const qNumber = document.getElementById('qNumber');
    qNumber.innerText = "Question: " + (questionNumber + 1);

    document.getElementById("question").innerText = questions[questionNumber]["question"];
    document.getElementById("choice-A").innerText = questions[questionNumber]["choiceA"];
    document.getElementById("choice-B").innerText = questions[questionNumber]["choiceB"];
    document.getElementById("choice-C").innerText = questions[questionNumber]["choiceC"];
    document.getElementById("choice-D").innerText = questions[questionNumber]["choiceD"];
}

function clearChoices() {
    const radioButtons = document.querySelectorAll('input[name="choices"]');
    for (const radioButton of radioButtons) {
        radioButton.checked = false;
    }
}

function calculateScore() {
    score = 0;
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].correct === selectedChoices[i])
            score++;
    }
    const scoreDisplay = document.querySelector('#results > p');
    scoreDisplay.innerText = 'Total Correct Answers: ' + score;
}