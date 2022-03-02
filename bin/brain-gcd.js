#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');

let quantityCorrectAnswer = 0;
while (quantityCorrectAnswer < 3) {
let randomNum1 = Math.floor(Math.random() * 10);
let randomNum2 = Math.floor(Math.random() * 10);

  function correctAnswerGcd (randomNum1, randomNum2) {
    if (!randomNum2) {
      return randomNum1;
    }
    return correctAnswerGcd(randomNum2, randomNum1 % randomNum2);
  }

let correctAnswer = correctAnswerGcd(randomNum1, randomNum2);

console.log(`Question: ${randomNum1} ${randomNum2}`);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === Number(answer)) {
    quantityCorrectAnswer += 1;
    console.log('Correct!');
    if (quantityCorrectAnswer === 3) {
      console.log(`'Congratulation, ${userName}!'`);
    }
  } if (correctAnswer !== Number(answer)) {
    quantityCorrectAnswer = 4;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!)`);
  }
};