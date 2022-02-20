





function rpsGame (yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    var array = ['rock', 'paper', 'scissors']
    var botChoice = array[Math.floor(Math.random() * array.length)];

    var results = decideWinner(humanChoice, botChoice);
    
 
    countSCore(results);
    var message = finalMwssage(results);

    frontEndRPS(humanChoice, botChoice, message);

}



function decideWinner(yourChoice, computerChoice) {
   
        var rpsDatabase = {
            'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
            'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
            'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 }
        };
        var yourScore = rpsDatabase[yourChoice][computerChoice];
        var compSCore = rpsDatabase[computerChoice][yourChoice];

        return [yourScore, compSCore];
}

function finalMwssage (results){

   if(results[0] === 0 ){
       return{'Message': 'You Lose!', 'Color': 'Red'};
       
   } else if (results[0] === 0.5){
    return{'Message': ' Draw !!', 'Color': 'Blue'};

   } else {
    return{'Message': 'You Win!', 'Color': 'Green'};
}

}

function frontEndRPS(humanChoiceIMG, botChoiceIMG, message){
    var ImgDatabase = {

          'rock' : document.getElementById('rock').src,
    'paper' : document.getElementById('paper').src,
     'scissors' : document.getElementById('scissors').src,
}
   

     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var msgDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=' "+ ImgDatabase[humanChoiceIMG] + "' > "
    msgDiv.innerHTML = "<h2>" + message['Message'] + "</h2>"
    botDiv.innerHTML = "<img src=' "+ ImgDatabase[botChoiceIMG] + "'>"


  var appHUm =  document.querySelector('.img-rps').appendChild(humanDiv);
                 document.querySelector('.img-rps').appendChild(msgDiv);
   var appBot =  document.querySelector('.img-rps').appendChild(botDiv);

   appHUm.classList.add('ourchoice');
   appBot.classList.add('ourchoice');

   
}

const question = new Map();
question.set('question', 'What is the official name of the newest JS version ?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES2017');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong answer');


// for (let [key, value] of question.entries()) {    
//     if(typeof(key) === 'string'){
//     console.log(`Answer ${key}: ${value}`); 
//    

class Person {
    constructor (name, YOB, Job){
        this.name = name;
        this.YOB = YOB;
        this.Job = Job;
    }
  
}


class Althete6 extends Person {
    constructor(name, YOB, Job, olympicGames, medalWon) {
        super(name, YOB, Job );
        this.olympicGames = olympicGames;
        this.medalWon = medalWon;
    }
}

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, NOT, parkArea) {
        super(name, buildYear);
        this.NOT = NOT;
        this.parkArea = parkArea;
        
    }
    ageCalculate() {
        const age = new Date().getFullYear() - this.buildYear;
        console.log(`${this.name} is ${age} Years Old`);
    }
    treeDensity(){
        const density = this.NOT/this.parkArea;
        console.log(`${this.name} has a Tree density of ${density} km`);
    }
 
}
