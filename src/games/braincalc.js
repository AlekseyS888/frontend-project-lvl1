#!/usr/bin/env node
import readlineSync from 'readline-sync';

import getRandomNumber from '../getRandomNumber.js';

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  let quantityCorrectAnswer = 0;
  while (quantityCorrectAnswer < 3) {
    const randomNum1 = getRandomNumber(1, 10);
    const randomNum2 = getRandomNumber(1, 10);
    const operator = ['+', '-', '*'];
    const randomOperator = operator[getRandomNumber(0, 2)];
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
    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(answer)) {
      quantityCorrectAnswer += 1;
      console.log('Correct!');
      if (quantityCorrectAnswer === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } if (correctAnswer !== Number(answer)) {
      quantityCorrectAnswer = 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!)`);
    }
  }
};
export default calcGame;
