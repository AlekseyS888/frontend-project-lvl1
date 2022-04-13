import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let quantityCorrectAnswer = 0;

  while (quantityCorrectAnswer < 3) {
    const randomNum = getRandomNumber(1, 100);
    const parityCheckRandomNum = (randomNum % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (parityCheckRandomNum === answer) {
      quantityCorrectAnswer += 1;
      console.log('Correct!');
    }
    if (quantityCorrectAnswer === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
    if (parityCheckRandomNum !== answer) {
      quantityCorrectAnswer = 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parityCheckRandomNum}'.\nLet's try again, ${userName}!)`);
    }
  }
};
export default evenGame;
