
var scores, roundScore, activePlayer;
activePlayer = 0;
scores = [0,0];
roundScore = 0;
var rollDice = document.querySelector(".btn--roll");
var updateScore;

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
var scorePlayer0 = document.querySelector('#score-0');
var currentPlayer0 = document.querySelector('#current-0');
var scorePlayer1 = document.querySelector('#score-1');
var currentPlayer1 = document.querySelector('#current-1');
var holdBtn = document.querySelector('.btn--hold');
var dice =  document.getElementsByClassName('dice');
var newGame = document.querySelector('.btn--new');
const playerWin = document.querySelector('.name-');

scorePlayer0.textContent = '0';
currentPlayer0.textContent = 0;
scorePlayer1.textContent = 0;
currentPlayer1.textContent = 0;
  // function for getting player current score  


const RollDice = () => {
  var dice = Math.floor(Math.random() * 6) + 1;

  var diceDOM = document.querySelector('.dice');
  
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png'; 

  if(dice > 1){
    roundScore += dice;
   document.querySelector('#current-' + activePlayer).textContent = roundScore;
   
  } else {
   nextPlayer()
   }

}

const nextPlayer = () => {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;

  playerEl0.classList.toggle('active');
  playerEl1.classList.toggle('active');
 
  document.querySelector('.dice').style.display = 'none';
}

//  Rolling a dice event. 



holdBtn.addEventListener('click', function() {
  scores[activePlayer] += roundScore;
  
  document.querySelector('#score-' + activePlayer). textContent = scores[activePlayer];

if(scores[activePlayer] >= 20){
   document.querySelector('#name-' + activePlayer ).textContent = 'WINNER';
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent ='0';
  document.getElementById('score-1').textContent ='0';
  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';
 
 

    
 } else {
    nextPlayer();
 }

})

newGame.addEventListener('click', function (){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent ='0';
  document.getElementById('score-1').textContent ='0';
  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';
})

