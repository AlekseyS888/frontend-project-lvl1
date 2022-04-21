import readlineSync from 'readline-sync';

export const userName2 = '';
const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
