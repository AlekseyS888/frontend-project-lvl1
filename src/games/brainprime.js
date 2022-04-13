import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const primeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  function isPrime(randomNum) {
    let i = 2;
    const limit = Math.sqrt(randomNum);
    while (i <= limit) {
      if (randomNum % i === 0) {
        return 'no';
      }
      i += 1;
    }
    return 'yes';
  }

  let quantityCorrectAnswer = 0;
  while (quantityCorrectAnswer < 3) {
    const randomNum = getRandomNumber(1, 100);
    const correctAnswer = isPrime(randomNum);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      quantityCorrectAnswer += 1;
      console.log('Correct!');
      if (quantityCorrectAnswer === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } if (correctAnswer !== answer) {
      quantityCorrectAnswer = 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!)`);
    }
  }
};
export default primeGame;
