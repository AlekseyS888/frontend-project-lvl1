#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');

const correctAnswerGcd = (randomNum1, randomNum2) => {
  if (!randomNum2) {
    return randomNum1;
  }
  return correctAnswerGcd(randomNum2, randomNum1 % randomNum2);
};

let quantityCorrectAnswer = 0;
while (quantityCorrectAnswer < 3) {
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);

  const correctAnswer = correctAnswerGcd(randomNum1, randomNum2);

  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === Number(answer)) {
    quantityCorrectAnswer += 1;
    console.log('Correct!');
    if (quantityCorrectAnswer === 3) {
      console.log(`Congratulation, ${userName}!`);
    }
  } if (correctAnswer !== Number(answer)) {
    quantityCorrectAnswer = 4;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!)`);
  }
}
