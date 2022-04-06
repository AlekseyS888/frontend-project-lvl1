#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

let quantityCorrectAnswer = 0;
while (quantityCorrectAnswer < 3) {
  const question = [];
  let startNumber = Math.floor(Math.random() * 5) + 1;
  const multiplier = Math.floor(Math.random() * 5) + 1;
  const quantity = 10;
  let i = 0;

  while (i < quantity) {
    question.push(startNumber);
    startNumber += multiplier;
    i += 1;
  }
  const randomArrIndex = Math.floor(Math.random() * 10);
  const correctAnswer = question[randomArrIndex];
  question[randomArrIndex] = '..';

  console.log(`Question: ${question.join(' ')}`);
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
