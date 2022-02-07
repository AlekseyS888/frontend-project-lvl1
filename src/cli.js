import readlineSync from 'readline-sync';
export cons userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');