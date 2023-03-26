const readline = require('readline');


const questions = [
  {
    question: "What is the result of 2+2?",
    options: ["a. 2", "b. 3", "c. 4", "d. 5"],
    answer: "b"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["a. string", "b. boolean", "c. float", "d. number"],
    answer: "c"
  },
  {
    question: "What is the output of the following code?\nconsole.log(typeof null);",
    options: ["a. object", "b. null", "c. undefined", "d. string"],
    answer: "a"
  }
];


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


shuffleArray(questions);

let score = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function askQuestion(q) {
  return new Promise((resolve, reject) => {
    
    console.log(q.question);
    q.options.forEach((option) => console.log(option));

    rl.question("Enter your answer (a, b, c, or d): ", (answer) => {
     
      if (answer.toLowerCase() === q.answer.toLowerCase()) {
        console.log("Correct!\n");
        score++;
      } else {
        console.log("Incorrect.\n");
      }
      resolve();
    });
  });
}

async function askAllQuestions() {
  for (let i = 0; i < questions.length; i++) {
    await askQuestion(questions[i]);
  }
}

askAllQuestions().then(() => {
  console.log(`Your score is ${score}/${questions.length}.`);
  rl.close();
});
