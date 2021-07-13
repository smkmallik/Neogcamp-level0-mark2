var readlineSync = require('readline-sync');

var chalk = require('chalk');

var optionsGreen = chalk.green;

var header = `
-----------------------------------------------
⚽   ⚽   ⚽   ⚽   🎾   🎾   🎾   🎾   🏏   🏏   🏏   🏏  
                                               
+++++++++👋  WELCOME TO SPORTS QUIZ 👋 ++++++++++
                                               
⚽   ⚽   ⚽   ⚽   🎾   🎾   🎾   🎾   🏏   🏏   🏏   🏏  
-----------------------------------------------
`;
console.log(chalk.red.bgWhite(header));

var questionUserName = 'May I know your name? ';

var userName = readlineSync.question(chalk.green(questionUserName + '\n'));


while(userName.length === 0) {
  console.log(chalk.redBright("Wait! you haven't entered your name!\n"));
  userName = readlineSync.question(chalk.green(questionUserName + '\n'));
}

var sportsList = [optionsGreen("Football ⚽"), optionsGreen("Cricket 🏏"), optionsGreen("Tennis 🎾")];

var greetingMessage = '\nWelcome to my quiz';

var score = 0;

userName = userName.charAt(0).toUpperCase() + userName.slice(1)

console.log((chalk.green(greetingMessage)) + ', '+ chalk.blue(userName) + ' 👋');

console.log(chalk.red('\nBefore playing the quiz, please go through the instructions'));

var instructions = `
---------------------------------------------------------------------- 
✨   ✨   ✨   ✨   ✨    INSTRUCTIONS  ✨   ✨   ✨   ✨   ✨   ✨               
---------------------------------------------------------------------- 
1) There are two levels in this quiz. (Level-1 and Level-2)            
                                                                       
2) There 5 questions for each levels. In total, there are 10 questions.
                                                                       
3) If you qualify level-1 then you are eligible to play the level-2. ⏫ 
                                                                       
4) You have to score atleast 3 points to qualify for level-2. ⏫        
                                                                       
5) There are 3 topics that you have to choose from. You have to choose 
any one of them.                                                       
  a) Football ⚽                                                        
  b) Cricket  🏏                                                        
  c) Tennis  🎾                                                         
                                                                       
6) If you select the correct option of the question then one point will
be awarded. ✔️                                                          
                                                                       
7) If you select the wrong option of the question then no points will  
be awarded. ❌                                                          
                                                                       
8) If you try to skip the question, then no point will be awarded. ❌   
                                                                       
9) Press '0' to stop the quiz 🛑                                        
---------------------------------------------------------------------- 
`;

console.log(chalk.red.bgWhite(instructions));

var sportsChoice = readlineSync.keyInSelect(sportsList, chalk.red('Which sport do you like?')); 

if(sportsChoice === 0)
  console.log(chalk.red('\nGreat!, you chose ') + ' ' + sportsList[0]);
else if(sportsChoice === 1) 
  console.log(chalk.red('\nGreat!, you chose ') + ' ' + sportsList[1]);
else if(sportsChoice === 2) 
  console.log(chalk.red('\nGreat!, you chose ') + ' ' + sportsList[2]);
else 
  console.log(chalk.red('\nYou have stopped the quiz, See you later! 👋👋'));

var questionSetFootballLevelOne = [
  {
    question: '1) Which of the following country won Football world Cup maximum times?',
    options: [optionsGreen("Germany"), optionsGreen("Italy"), optionsGreen("Argentina"), optionsGreen("Brazil")],
    answer: optionsGreen("Brazil")
  }, 
  {
    question: "2) Who got FIFA Best Player 2019 Award?",
    options: [optionsGreen("Neymar"), optionsGreen("L.Messi"), optionsGreen("C.Ronaldo"), optionsGreen("Luka Modric")],
    answer: optionsGreen("L.Messi")
  },
  {
    question: "3) When was the first official international football match was played?",
    options: [optionsGreen(1929), optionsGreen(1872), optionsGreen(1902), optionsGreen(1870)],
    answer: optionsGreen(1872)
  },
  {
    question: "4) How many countries played at the World Cup 2014 tournament?",
    options: [optionsGreen(36), optionsGreen(32), optionsGreen(28), optionsGreen(30)],
    answer: optionsGreen(32)
  },
  {
    question: "5) Which team was awarded the FIFA Fair Play Award at the World Cup 2018 tournament?",
    options: [optionsGreen("England"), optionsGreen("Spain"), optionsGreen("Japan"), optionsGreen("Croatia")],
    answer: optionsGreen("Spain")
  }
]

var questionSetFootballLevelTwo = [
  {
    question: "6) Which team scored the highest number of goals at the FIFA World Cup 2018?",
    options: [optionsGreen("Belgium"), optionsGreen("France"), optionsGreen("England"), optionsGreen("Croatia")],
    answer: optionsGreen("Belgium")
  },
  {
    question: "7) What color cards do the referees carry in a football match?",
    options: [optionsGreen("Red and Yellow"), optionsGreen("Black and White"), optionsGreen("Red and Green"), optionsGreen("Yellow and Orange")],
    answer: optionsGreen("Red and Yellow")
  },
  {
    question: "8) What is the usual length of time allowed for half-time interval in a football match? ",
    options: [optionsGreen("10 minutes"), optionsGreen("15 minutes"), optionsGreen("1 hour"), optionsGreen("25 minutes")],
    answer: optionsGreen("25 minutes")
  },
  {
    question: "9) Real Madrid plays football in which country? ",
    options: [optionsGreen("Germany"), optionsGreen("Scotland"), optionsGreen("Spain"), optionsGreen("Italy")],
    answer: optionsGreen("Spain")
  },
  {
    question: "10) Which English football club has the nickname 'The Gunners'? ",
    options: [optionsGreen("Chelsea"), optionsGreen("Arsenal"), optionsGreen("Aston Villa"), optionsGreen("Brighton")],
    answer: optionsGreen("Arsenal")
  }
]

var questionSetCricketLevelOne = [
  {
    question: "1) Which cricket team has won the most ICC Cricket World Cup titles? ",
    options: [optionsGreen("West Indies"), optionsGreen("India"), optionsGreen("England"), optionsGreen("Australia")],
    answer: optionsGreen("Australia")
  },
  {
    question: "2) Which of the following country did not won the ICC Cricket World Cup (50 over format) title so far? ",
    options: [optionsGreen("Bangladesh"), optionsGreen("South Africa"), optionsGreen("New Zealand"), optionsGreen("All of the above")],
    answer: optionsGreen("All of the above")
  },
  {
    question: "3) When was first ICC cricket World Cup started?",
    options: [optionsGreen(1972), optionsGreen(1975), optionsGreen(1985), optionsGreen(1979)],
    answer: optionsGreen(1975)
  },
  {
    question: "4) Which Indian cricketer had won the “Man of the Match” award in the final of the ICC World Cup 1983?",
    options: [optionsGreen("Kapil Dev"), optionsGreen("Sunil Gavaskar"), optionsGreen("Ravi Shastri"), optionsGreen("Mohinder Amarnath")],
    answer: optionsGreen("Mohinder Amarnath")
  },
  {
    question: "5) Who was the captain of the Indian cricket team in the ICC World Cup 1983?",
    options: [optionsGreen("Sunil Gavaskar"), optionsGreen("Kirti Azad"), optionsGreen("Kapil Dev"), optionsGreen("None of these")],
    answer: optionsGreen("Kapil Dev")
  }
]

var questionSetCricketLevelTwo = [
  {
    question: "6) Which of the following country has hosted the ICC World Cup most times? ",
    options: [optionsGreen("England"), optionsGreen("India"), optionsGreen("Australia"), optionsGreen("West Indies")],
    answer: optionsGreen("England")
  },
  {
    question: "7) Which of the following is the oldest test cricket playing country in the world?",
    options: [optionsGreen("Australia"), optionsGreen("India"), optionsGreen("West Indies"), optionsGreen("South Africa")],
    answer: optionsGreen("Australia")
  },
  {
    question: "8) Where is the headquarter of the ICC? ",
    options: [optionsGreen("London"), optionsGreen("Cape Town"), optionsGreen("Sydney"), optionsGreen("Dubai")],
    answer: optionsGreen("Dubai")
  },
  {
    question: "9) When was ICC establised? ",
    options: [optionsGreen(1909), optionsGreen(1953), optionsGreen(1960), optionsGreen(1877)],
    answer: optionsGreen(1909)
  },
  {
    question: "10) Which of the following international competition is not organized by the ICC? ",
    options: [optionsGreen("Champions Trophy"), optionsGreen("World Cricket League"), optionsGreen("Under 19 Cricket World Cup"), optionsGreen("Syed Mustaq Ali Trophy")],
    answer: optionsGreen("Syed Mustaq Ali Trophy")
  }
]

questionSetTennisLevelOne = [
  {
    question: "1) In which country tennis-originated ? ",
    options: [optionsGreen("USA"), optionsGreen("England"), optionsGreen("France"), optionsGreen("None of these")],
    answer: optionsGreen("England")
  },
  {
    question: "2) What is the length of Tennis-Court ? ",
    options: [optionsGreen("85-feet"), optionsGreen("78-feet"), optionsGreen("76-feet"), optionsGreen("110-feet")],
    answer: optionsGreen("78-feet")
  },
  {
    question: "3) Where is the headquarters of International Tennis Federation ? ",
    options: [optionsGreen("Sydney"), optionsGreen("New York"), optionsGreen("London"), optionsGreen("None of these")],
    answer: optionsGreen("London")
  },
  {
    question: "4) Where did the Grand-slam, Australian-Open take place ? ",
    options: [optionsGreen("Sydney"), optionsGreen("Brisbane"), optionsGreen("Canberra"), optionsGreen("Melbourne")],
    answer: optionsGreen("Melbourne")
  },
  {
    question: "5) Where did the Grand-slam, US-Open take place ? ",
    options: [optionsGreen("California"), optionsGreen("New Jersey"), optionsGreen("New York"), optionsGreen("Texas")],
    answer: optionsGreen("New York")
  }
]

questionSetTennisLevelTwo = [
  {
    question: "6) Which is the oldest-tennis-tournament in the world ?",
    options: [optionsGreen("Australia Open"), optionsGreen("US Open"), optionsGreen("Roland Garros"), optionsGreen("Wimbledon")],
    answer: optionsGreen("Wimbledon")
  },
  {
    question: "7) Which is the highest paying tennis tournament in the world ? ",
    options: [optionsGreen("Australia Open"), optionsGreen("US Open"), optionsGreen("Roland Garros"), optionsGreen("Wimbledon")],
    answer: optionsGreen("US Open")
  },
  {
    question: "8) Roger Federer has won how many Grand Slams?",
    options: [optionsGreen(15), optionsGreen(17), optionsGreen(20), optionsGreen(19)],
    answer: optionsGreen(20)
  },
  {
    question: "9) Which of the following terms is used in the game of Lawn Tennis? ",
    options: [optionsGreen("Deuce"), optionsGreen("Jockey"), optionsGreen("Punter"), optionsGreen("Scoop")],
    answer: optionsGreen("Deuce")
  },
  {
    question: "10) The famous Indian Express was a team of? ",
    options: [optionsGreen("Leander Paes and Mahesh Bhupati"), optionsGreen("Mahesh Bhupati and Rohan Boppana"), optionsGreen("Leander Paes and Yuki Bhambri"), optionsGreen("Yuki Bhambri and Rohan Boppana")], 
    answer: optionsGreen("Leander Paes and Mahesh Bhupati")
  }
]

var highestScoreFootball =[ 
  {
    name: 'Soumik',
    score: 8
  },
  {
    name: 'Anirudh',
    score: 7
  },
  {
    name: 'Samyak',
    score: 5
  },
  {
    name: 'Ayus',
    score: 3
  }
]
var highestScoreCricket = {
  name: 'Tanuj',
  score: 5
}

var highestScoreTennis = {
  name: 'Aniruddha',
  score: 5
}

function play(question, options, answer) {
  var index=readlineSync.keyInSelect(options, chalk.yellow(question));
  var userAnswer = options[index];
  if(userAnswer === answer) {
    score = score + 1;
    console.log(chalk.green("\nCorrect! ✔️"));
    console.log(chalk.cyan("\nCorrect Answer: ") + answer);
    console.log(chalk.cyan("\nYour Answer: ") + userAnswer);
  } else if(userAnswer === undefined) {
    console.log(chalk.red('\nYou have skipped a question ❌ '));
  } else {
    console.log(chalk.red("\nWrong! ❌"));
    console.log(chalk.cyan("\nCorrect Answer: ")+ answer);
    console.log(chalk.cyan("\nYour Answer: ") + userAnswer);
  }
}

function levelTwo(score, questions) {
  console.log(chalk.green('\n\nCongrats! you are eligible to play level 2 ⏫'));
  for(var i=0;i<questions.length;i=i+1) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
  }
}

function levelOne(questions) {
  for(var i=0;i<questions.length;i=i+1) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
  }
}

if(sportsChoice == 0 || sportsChoice == 1 || sportsChoice == 2)
  console.log(chalk.yellow("\n\nLet's begin the quiz, All the best!! 💯 \t 💯 "));

if(sportsChoice === 0) {
  questions=questionSetFootballLevelOne
  levelOne(questions);
 if(score >= 3) {
    questions = questionSetFootballLevelTwo
    levelTwo(score, questions);
  } else {
    console.log(chalk.red('\n\nSorry! you are not eligible for level 2. 😢'));
 }
} else if(sportsChoice === 1) {
   questions = questionSetCricketLevelOne
   levelOne(questions);
  if(score >= 3) {
    questions = questionSetCricketLevelTwo
    levelTwo(score, questions);
  } else {
    console.log(chalk.red('\n\nSorry! you are not eligible for level 2. 😢'));
 }
} else if(sportsChoice === 2) {
   questions = questionSetTennisLevelOne
   levelOne(questions)
  if(score >= 3) {
    questions = questionSetTennisLevelTwo
    levelTwo(score, questions);
  } else {
    console.log(chalk.red('\n\nSorry! you are not eligible for level 2. 😢 '));
 }
}

if(sportsChoice === 0 || sportsChoice === 1 || sportsChoice === 2)
  console.log(chalk.green("\nTotal Score is: ") + score);

if(sportsChoice === 0) {
  if(score > highestScoreFootball[0].score) {
    console.log(chalk.green('\n\nCongrats! You got the highest score 💯💯'));
  } else {
    console.log(chalk.red('Your score is less than the highest score 😢, better luck next time! 💯'));
  }
}

if(sportsChoice === 1) {
  if(score > highestScoreCricket.score) {
    console.log(chalk.green('\n\nCongrats! You got the highest score 💯💯'));

  } else {
    console.log(chalk.red('Your score is less than the highest score 😢, better luck next time! 💯'));
  }
}

if(sportsChoice === 2) {
  if(score > highestScoreTennis.score) {
    console.log(chalk.green('\n\nCongrats! You got the highest score 💯💯'));
  } else {
    console.log(chalk.red('Your score is less than the highest score 😢, better luck next time! 💯'));
  }
}

console.log(chalk.yellow('\n\nShare this quiz with your friends and also do share the final score'));
console.log(chalk.yellow('\nby tweeting or direct message to @soumik_72 on twitter.'));
console.log(chalk.yellow('\nI will add it in the leaderboard soon 💯'));

var leaderBoard = `
--------------------------------------
🏅 🏅 🏅     LEADERBOARD   🏅 🏅 🏅         
--------------------------------------
`
console.log(chalk.red.bgWhite(leaderBoard));

var highestScoreBeaten = false;
var indexInsert=0;
for(var i=0;i<highestScoreFootball.length;i++){
  highestScoreBeaten=true;
  indexInsert=i;
  highestScoreFootball.splice(indexInsert, 0, {name: `${userName}`, score: `${score}`});
  break;
}

if(highestScoreBeaten) {
  for(var i=0; i<highestScoreFootball.length;i++) {
    console.log(chalk.red(highestScoreFootball[i].name) + ": " + chalk.yellow(highestScoreFootball[i].score));
  }
}


console.log(chalk.red.bgWhite('\n--------------------------------------'));

