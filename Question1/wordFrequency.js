
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  
  output: process.stdout
});

function wordFrequency() {
  rl.question('Enter some text: ', (text) => {
    const words = text.split(/\s+/);
    const wordCount = {};
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();   
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
    
    const wordArray = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    console.log('Word Frequency Count:');
    wordArray.forEach(([word, count]) => {
      console.log(`${word}: ${count}`);
    });
    
    rl.close();
  });
}
wordFrequency();
