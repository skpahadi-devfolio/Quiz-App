const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Language",
      "HyperText Markdown Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "React", "Angular", "Vue"],
    answer: "Python Script"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "/* */", "--"],
    answer: "//"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreText = document.getElementById("score");

// Load current question
function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectOption(li));
    optionsEl.appendChild(li);
  });

  nextBtn.disabled = true;
}

// Highlight selected option
function selectOption(selectedLi) {
  const allOptions = document.querySelectorAll("#options li");
  allOptions.forEach(li => li.classList.remove("selected"));
  selectedLi.classList.add("selected");
  nextBtn.disabled = false;
}

// Handle next button click
nextBtn.addEventListener("click", () => {
  const selected = document.querySelector("#options li.selected");
  if (selected) {
    const userAnswer = selected.textContent;
    if (userAnswer === quizData[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      // Show result
      quizBox.classList.add("hidden");
      resultBox.classList.remove("hidden");
      scoreText.textContent = `Your Score: ${score} / ${quizData.length}`;
    }
  }
});

// Initial call
loadQuestion();
