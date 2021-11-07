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
   return tips.push(tipPercentage * bill);
    
      } else if (200 > bill && 50 <= bill){
        return tips.push(tipPercentage * bill);
    
    
    }else if (200 <= bill ){
        return tips.push(tipPercentage * bill);
    }
    
    else {
        console.log ('not working');
      }
    
    }
    const tips = [];
    
