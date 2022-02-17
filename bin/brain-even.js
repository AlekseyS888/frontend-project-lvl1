#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let quantityCorrectAnswer = 0;
while (quantityCorrectAnswer < 3) {
  let randomNum = Math.floor(Math.random() * 100);
  let parityCheckRandomNum = (randomNum % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (parityCheckRandomNum === answer) {
  quantityCorrectAnswer += 1;
  console.log('Correct!');
  quantityCorrectAnswer === 3 ? console.log(`'Congratulation, ${userName}!'`) : '';
} else if (parityCheckRandomNum != answer) {
  quantityCorrectAnswer = 4;
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parityCheckRandomNum}'.\nLet's try again, ${userName}!)`);
} 
};