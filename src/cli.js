import readlineSync from 'readline-sync';

export const userName2 = '';
const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  const userName2 = userName;
  console.log(`Hello, ${userName}!`);
   };


export default askName;