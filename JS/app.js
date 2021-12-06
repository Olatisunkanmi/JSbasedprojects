  var scores, roundScore, activePlayer;
  var rollDice = document.querySelector(".btn--roll");
  var updateScore;
  var lastDiceValue;
  let gamePlaying = true;
  let winningScoreInput = true;
  var activeScore;

  
  init();

  const playerEl0 = document.querySelector('.player-0');
  const playerEl1 = document.querySelector('.player-1');
  var scorePlayer0 = document.querySelector('#score-0');
  var currentPlayer0 = document.querySelector('#current-0');
  var scorePlayer1 = document.querySelector('#score-1');
  var currentPlayer1 = document.querySelector('#current-1');
  var holdBtn = document.querySelector('.btn--hold');
  var diceDOM = document.querySelector('.dice');
  var diceDOM2 = document.querySelector('.dice-2')


  var dice =  document.getElementsByClassName('dice'); 
  var dice2 = document.getElementsByClassName('dice-2');

  var newGame = document.querySelector('.btn--new');
  const playerWin = document.querySelector('.name-');


  // function for getting player current score  
  const RollDice = () => { 
    
    let input = document.querySelector('#btnn').value;
    winningScore = input;
    if(input < 1 || input == undefined || input == null || input == ''){
      winningScore = 50;
    }
    
    var winningScoreAppear = document.querySelector('#winnngBoard');
     winningScoreAppear.innerHTML ='Winning Score :' + `${winningScore}`;


   if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'; 

        var diceR = Math.floor(Math.random() * 6) + 1;
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + diceR + '.png'


        if (diceR === 6 && dice === 6 ){
            scores[activePlayer] = 0;
            document.querySelector('#current-' + activePlayer).textContent = '0';
            nextPlayer();

        } else {  if( dice > 1 && diceR > 1)
          {
          activeScore =  dice + diceR;
          roundScore += activeScore;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;

          } 
          
          else {nextPlayer();} 
        }
        

      }

   } 


  const nextPlayer = () => {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  playerEl0.classList.toggle('active');
  playerEl1.classList.toggle('active');
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;
  document.querySelector('.dice').style.display = 'block';
  }

  //  Rolling a dice event. 

  holdBtn.addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  
    let input = document.querySelector('#btnn').value;
    winningScore = input;
    if(input < 1 || input == undefined || input == null || input == ''){
      winningScore = 50;
    }
    

    if (scores[activePlayer] >= winningScore ){
        document.querySelector('.player-' + activePlayer).classList.add('winner');
        document.querySelector('#name-' + activePlayer ).textContent = 'WINNER !';
        document.querySelector('.player-' + activePlayer).classList.remove('active'); 
        document.querySelector('.dice').style.display = 'block';
        document.getElementById('current-' + activePlayer).textContent ='0';
          roundScore = 0;
          gamePlaying = false;
        
    

      } else { nextPlayer();}

    

  })

 


  newGame.addEventListener('click', init)

  function init ()  {
  activePlayer = 0;
  scores = [0,0];
  roundScore = 0;
  gamePlaying = true;
  document.querySelector('.player-0').classList.add('active'); 
  document.querySelector('.player-1').classList.remove('active'); 
  document.querySelector('.dice').style.display = 'block';
  document.getElementById('score-0').textContent ='0';
  document.getElementById('score-1').textContent ='0';
  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';
  document.querySelector('.player-' + 0).classList.remove('winner');
  document.querySelector('.player-' + 1).classList.remove('winner');
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  }

  