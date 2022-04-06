#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

let quantityCorrectAnswer = 0;
while (quantityCorrectAnswer < 3) {
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[Math.floor(Math.random() * operator.length)];
  let correctAnswer = 0;
  switch (randomOperator) {
    case '+':
      correctAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      correctAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      correctAnswer = randomNum1 * randomNum2;
      break;
    default:
      console.log('чо-то не так!');
  }
  console.log(`Question: ${randomNum1}${randomOperator}${randomNum2}`);
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
