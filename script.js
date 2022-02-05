const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Who invented JavaScript?",

    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "none of the above",
    correct: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",

    a: "Node.js",
    b: "TypeScript",
    c: "npm",
    d: "none of the above",
    correct: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",

    a: "Angular",
    b: "jQuery",
    c: "RequireJS",
    d: "ESLint",
    correct: "d",
  },
];

const quizz = document.getElementById("quizz");
const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submit");

let currentQuizz = 0;
let score = 0;

loadQuizz();

function loadQuizz() {
  deleteAnswers();
  const currentQuizzData = quizData[currentQuizz];
  question.innerText = currentQuizzData.question;
  a_text.innerText = currentQuizzData.a;
  b_text.innerText = currentQuizzData.b;
  c_text.innerText = currentQuizzData.c;
  d_text.innerText = currentQuizzData.d;
}

function deleteAnswers() {
  answerEls.forEach((elem) => (elem.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((elem) => {
    if (elem.checked) answer = elem.id;
  });
  return answer;
}

btn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuizz].correct) {
      score++;
      console.log(score);
    }
    currentQuizz++;
    if (currentQuizz < quizData.length) {
      loadQuizz();
    } else {
      quizz.innerHTML = `
        <h2>You answered ${score} / ${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `;
    }
  } else {
    alert("Please select an answer!");
  }
});
