# Quiz App

A multiple-choice quiz that runs entirely from one array. Answer, submit, move
to the next question, and get a score at the end.

**[Live demo →](https://vette1123.github.io/Quizz-App/)**

## Stack

Plain HTML, CSS and JavaScript. No framework, no router, no build step, no
dependencies. Deployed to GitHub Pages.

## Questions are data, not markup

Every question is an object with the text, four options and the key of the
correct answer:

```js
const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  // ...
]
```

The markup is written **once** — four radio inputs with ids `a` through `d` —
and `loadQuizz()` rewrites their labels from the current object. The radio ids
line up with the answer keys, which is what makes checking a submission a
single comparison:

```js
if (answer === quizData[currentQuizz].correct) score++
```

That is the whole design decision, and it is the difference between a quiz you
extend by appending an object and one you extend by copy-pasting another block
of HTML with its own handlers. It is a small lesson on a small project, and it
generalises to every list-shaped interface after it.

## Adding questions

Append to `quizData` in `script.js`. Nothing else needs to change — not the
markup, not the scoring, not the end screen, which reads its total from
`quizData.length`.

## Known limitations

- **No feedback per answer.** You find out the score at the end and never learn
  which ones you got wrong.
- **No going back.** `currentQuizz` only increments.
- **The end screen replaces the container with `innerHTML`** and restarts via
  `location.reload()` rather than resetting state — which works, and throws
  away the page to do it.
- **`alert()` for the empty-answer case.** Fine for a demo; an inline message
  would not block the thread or look like a browser error.

## Running locally

```bash
git clone https://github.com/Vette1123/Quizz-App.git
cd Quizz-App
# open index.html — no build, no server needed
```

---

Built by [Mohamed Gado](https://mohamedgado.com)
