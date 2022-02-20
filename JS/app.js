  
  
  var scores, roundScore, activePlayer;
  var rollDice = document.querySelector(".btn--roll");
  var updateScore;
  var lastDiceValue;
  let gamePlaying = true;
  let winningScoreInput = true;
  var activeScore;
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

  init();

  
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
  document.querySelector('.dice-2').style.display = 'block';
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
  
  document.getElementById('score-0').textContent ='0';
  document.getElementById('score-1').textContent ='0';
  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';
  document.querySelector('.player-' + 0).classList.remove('winner');
  document.querySelector('.player-' + 1).classList.remove('winner');
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  document.querySelector('.dice-2').style.display = 'none';

  } 

  (function (){
      document.querySelector('.pig-game').classList.add('pig-displayOFF');
      document.querySelector('.pig-game-mini').classList.add('pig-displayOFF');

      console.log('Working function');
  })();

  const displayPig = () => {
   document.querySelector('.pig-game').classList.toggle('pig-displayON');
   document.querySelector('.pig-game-mini').classList.toggle('pig-displayON');
    init();
  }


 
 function InterviewQue (job) {
   var a = 'This is Frontend';
   var b = ' This is Backend';
   var c = ' Cloud Venue';

   return function (name) {

    if(job >= 7){
    console.log(' Welcome ' + name + a);

  }  else if (job <= 3 ) {
      console.log(' Welcome ' + name + b );
  
     }   else {        
       console.log(' Welcome ' + name + c)
      }
   
} 
 }

 var arry = ['John', 'Janet', 'Jackson'];
var jobName = arry[Math.floor(Math.random ()* arry.length)] ;

var jobNumber = Math.floor( Math.random () * 10);


var TestGameModel = InterviewQue(jobNumber);
TestGameModel(jobName);




var john = {
  name : 'John',
  age : 26,
  job: 'teacher',
  presentaion: function (style, ToD) {
    if (style === 'formal'){
      console.log('Good ' + ToD 
           + ' ladies and Gentlement, I\'m ' + this.name 
          + ' I am ' + this.age + 'years old. I am a ' + this.job
          + ' by Profession. ' )

    }  else if( style === 'informal'){
      console.log(ToD 
      + ' OGs, I\'m ' + this.name 
      + ' A ' + this.age + 'years old ' + this.job )
      
    } else { console.log('Erro R !')};
  }
}

var Times = ['Good Morning', 'Good Afternoon', 'Good evening'];
var tode = Times[Math.floor(Math.random () * Times.length)];


var Alice = {
  name :  'Alice',
  age : 29,
  job : 'Software Engineer'
};

john.presentaion ('formal', tode);

john.presentaion.call(Alice, 'informal', tode);

// method.apply inherits properties like the above but it accpets only arrays.

JohnFriendly = john.presentaion.bind(john, 'informal');
JohnFriendly(tode);

EmilyFormal = john.presentaion.bind(Alice, 'formal');
EmilyFormal(tode);

var years =  [1990, 2005, 1991, 1987, 1998];
var years =  [1990, 2005, 1991, 1987, 1998];

function calcEqu (arr, fn){ 
  newArray = [];
   for(var i = 0; i < arr.length; i++){
     
    newArray.push(fn(arr[i]));
   }

   return newArray;
}

const calcAge = (el) => {
  return 2012 - el;
}

function isFullAge(limit, el) {
  return el <= limit;
} 

var ages = calcEqu(years, calcAge);

var isFullAgee = calcEqu(ages, isFullAge.bind(this, 20));
console.log(isFullAgee);

console.log(ages);

(function () {
  
  class Questions {
    constructor (question, answer, select) {
        this.question = question;
        this.answer = answer;
        this.select = select;
    }
  }
 
    Questions.prototype.questionMethod = function () {
    console.log(this.question);
   
  for(var i = 0; i < this.answer.length; i++){
    console.log(i + ':' + this.answer[i]);
       }
 };
    
checkAnswer();

  
  var q1 = new Questions ('How old are you ?', [12, 16, 20], 0);
  var q2 =  new Questions ('Who is the greatest Nigerian Artiste ?', ['Burna','Wizzy', 'Davido'], 0);
  var q3 = new Questions ('What day is it ?', ['Today', 'Tomorrow', 'The day after'], 0);

  var Que =  [q1, q2 ,q3];
  var totalSCore = 0;


function checkAnswer() {

  Questions.prototype.ckAnswer = function (ans) {
 
    totalSCore = checkFinSco(ans, totalSCore); 
  }  
}

// function ckScore (sc) {
//   if(sc){
//     console.log('Your Total Score is ' + totalSCore ++);
//     console.log('----------------------------------------');

//   } else {
//     console.log('Your Total Score is ' + totalSCore);
//     console.log('----------------------------------------');
//   }
// }



function nextPlay () {
  var n = Que[Math.floor(Math.random() * Que.length)];

   n.questionMethod();

   var answer = prompt('Choose Wisely');

  if (answer != 'exit'){
      n.ckAnswer(parseInt(answer));
      
     
      nextPlay();
      
  }
} nextPlay();

})
 
  

function checkFinSco(ans, totalSCore) {
  if (ans === this.select) {
    console.log('Correct Response');
    console.log('Your Total Score is ' + totalSCore++);
    console.log('----------------------------------------');

  }
  else {
    console.log('Wrong Answer');
    console.log('Your Total Score is ' + totalSCore);
    console.log('----------------------------------------');

  }
  return totalSCore;
}
 

var publicController =  ( function () {
   var x = 25 ;

   var add = function (a) {
     return x + a;
   }

   return{
     public: function (b){
       console.log(add(b));
     }
   }
})();



// window.addEventListener('load', (event) => {
//    ul.innerHTML='';
//   });

//  To do list 
var input = document.getElementById('input');
var button = document.getElementById('enter');
var ul = document.querySelectorAll('ul')[0];
var clear = document.getElementById('clear');
var list = document.getElementById('list');


function inputvalue (){
    return input.value.length
}


const addInput =() => {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    
}

button.addEventListener('click', function(){
   if(inputvalue() > 0 ){ 
        addInput()
   }
   else{
       alert('Enter To-do List');
   }
})

 input.addEventListener('keypress', function(event){
        if(inputvalue() > 0 && event.keyCode === 13){
           addInput();
           } 
})




clear.addEventListener('click', function(){
    ul.innerHTML= '';
})

// List designs 
const listStyle = () => {
    list.style.backgroundColor = 'red';
}



// Background Generator 

var css = document.getElementById("color-input");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); 
var body = document.querySelector('body');

const setGradient = () => {
    body.style.background = 
'linear-gradient(to right, '
 + color1.value
  + ',' 
  + color2.value 
  + ')';
}



color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);


// var job = prompt('Enter Job');
// var name = prompt('Enter Name')
var whatYouDO =  function () { 
    switch(job){
        case 'teacher':
        return firstname + ' teaches kids';
   
        case 'biker':
        return firstname +  ' teaches kids bike-riding';
       
        case    'Dancer':
        return firstname + ' teaches kids how to Dance';

        case 'plumber':
        return firstname + ' plumbs pips';
    
        default:
        return 'ENter valid details';
    }
}

// whatYouDO(job, firstname);



const calcTip = () => {

   var bill = prompt('Enter bill');
    var tip  = prompt('Enter tip percentage');
    var tipPercentage = (tip / 100);
  


         if( 50 > bill ){
    console.log(tipPercentage * bill); 
    
      } else if (200 > bill && 50 <= bill){
        console.log(tipPercentage * bill);
    
    
    }else if (200 <= bill ){
       console(tipPercentage * bill);
    }
    
    else {
        console.log ('not working');
      }
    
    }
  
    //          Guess Game 


 