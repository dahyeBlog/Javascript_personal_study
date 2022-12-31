let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoredBoard_div = document.querySelector('.score-board')
const result_div_p = document.querySelector('.result > p')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')

const ROCK= '✊🏻';
const PAPER = '✋🏻';
const SCISSORS = '✌🏻';
const RESULT_DRAW = '비김';
const RESULT_USER_WINS = '사용자승';
const RESULT_COMPUTER_WINS = '컴퓨터승';


const getComputerChoice = () => {
  const choices = ['✌🏻', '✊🏻', '✋🏻']
  const random = Math.floor(Math.random() * choices.length )
  return choices[random]
}

const reset  = (score) => {

  if(score > 10) {
    userScore =  0
    computerScore = 0


  result_div_p.innerHTML = `게임이 끝났습니다. 다시 시도 하세요!`


    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
   } 
  }
  

const win = (user, comp) => { 
  userScore++
  userScore_span.innerHTML = userScore

  result_div_p.innerHTML = `사용자 : ${user} <br /> 컴퓨터 : ${comp}  <br /> 사용자 승리하셨습니다. 🎉 `
  

    


  reset(userScore)

} 

const lose = (user, comp) => { 
  computerScore++
  computerScore_span.innerHTML = computerScore
  result_div_p.innerHTML = `사용자 : ${user} <br /> 컴퓨터 : ${comp}  <br /> 컴퓨터의 승리 입니다. 😭 `
  reset(computerScore)
} 

const draw = (user, comp) => { 
  result_div_p.innerHTML = `사용자 : ${user} <br /> 컴퓨터 : ${comp}  <br /> 비겼습니다. `
} 




const game = (userChoice) => {
  const computerChoice = getComputerChoice()
  console.log('컴퓨터 선택 ' + computerChoice, '사용자 선택 ' + userChoice);
  
  let result = computerChoice === userChoice ?  RESULT_DRAW : (computerChoice === ROCK && userChoice === PAPER) || (computerChoice === PAPER && userChoice === SCISSORS) || (computerChoice === SCISSORS && userChoice === ROCK) ? RESULT_USER_WINS : RESULT_COMPUTER_WINS 

  
  if(result === '비김') {
    draw(userChoice,computerChoice)
  } else if(result === '사용자승'){
    win(userChoice,computerChoice)
  } else {
    lose(userChoice,computerChoice)
  }

}



const main = () => {


  rock_div.addEventListener('click', () => {

    game(ROCK);    
  })
  
  paper_div.addEventListener('click', () => {
    game(PAPER);
  })
  
  scissors_div.addEventListener('click', () => {
    game(SCISSORS);
  })
  
}

main()

