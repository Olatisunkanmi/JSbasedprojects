//                  Stores and structure the User data 
var budgetController =  (function () {
    class Expenses {
        constructor(id, description, value){
            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;
        }

        calculatePercentag (totalincome) {
        if(totalincome > 0 ){
    this.percentage = Math.round((this.value / totalincome) * 100 )

        } else {
            this.percentage =  -1;
        }
     }

     getPercentage () {
        return this.percentage;
    }


 };


    

    class Income { 
        constructor(id, description, value){
            this.id = id;
            this.description = description;
            this.value = value;
        }
    
    }



    // when deleting from an array. we have to locate the indexOF the element

    var calcBudget = (type) => {
        var sum = 0;
        data.allItems[type].forEach(function (cur){
            sum += cur.value;

        });

        data.totals[type] = sum;
    }
    

    let data = {
        allItems : {
            exp: [],
            inc: []
        },
        totals : {
            exp: 0,
            inc: 0
        },
        percentage: 0,
        budget : 0
    };

    return{
        getAllItems : (type, des, value) => {
            var newItem, ID;

            // creates a new ID based on the last number in the array. 
            //  the array can either be  income or expenses.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //  Create new income or expenses 
            if (type === 'exp') {
                newItem = new Expenses(ID, des, value);
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, value);
            }

            // Pushing the newly created   income or expenses into our array
            data.allItems[type].push(newItem);

            // returning the newly created element 
            return newItem;
        },

        deleteItem: (type, id) => {
            var ids, index;
         var ids =  data.allItems[type].map((current) => current.id);
                index = ids.indexOf(id);

                if (index !== -1){
 // the splice methdd accpets  two argments
//   (first is the position to delte from and second how many elements to delete from thatt positon)
                data.allItems[type].splice(index, 1);
                }
                
         },

        updateBudget: () => {
            var percentageCalc;
            // calculate income and expenses 
            // we already have the sum of income and expenses in the budget ctrl
            calcBudget('inc');
            calcBudget('exp');

            // calculate the budget 
            data.budget = data.totals.inc - data.totals.exp;

            if(data.totals.inc > 0){
                  percentageCalc = Math.round(( data.totals.exp / data.totals.inc) * 100);
            console.log(percentageCalc);

            data.percentage = percentageCalc;
            } else {
                data.percentage = -1;
            }            
        },

        testing: () => {
            console.log(data);
        },

        calculatePercentages : () => {
                data.allItems.exp.forEach( (current) => current.calculatePercentag(data.totals.inc) )
        },

        getPercent : () => {
          var allPerc=  data.allItems.exp.map((current) => current.getPercentage())
              return allPerc;
        },


        getBudget : () => {
            return{
                budget : data.budget,
                percentage : data.percentage,
                totalsIncome : data.totals.inc,
                totalsExpenses : data.totals.exp
            }
        },
    }

})();
      
      
      
      
                   // Communicates with HTML

var UIcontroller = (() => {

    var AllDomName = {
            InputType:'.add--type',
            InputDescription: '.add--description',
            InputValue: '.add--value',
            InputAddBtn: '.add--btn',
            IncomeContainer: '.Income',
            ExpensesContainer: '.Expenses',
            InputMonth: '.current-month',
            InputCurrentBalance: '.current-balance',
            ExpensesInput: '.expenses-span',
            IncomeInput: '.income-span',
            containerInput: '.budget--list'

        
    }
    
    return{
    getInput: function () {
            return {
                type:document.querySelector(AllDomName.InputType).value,
                description: document.querySelector(AllDomName.InputDescription).value, 
                value: parseFloat( document.querySelector(AllDomName.InputValue).value)
             };
        },

        addListItem: function (obj, type) {
            var  html, newHTML, element;
        
        if(type === 'exp'){
            element = AllDomName.ExpensesContainer;
            html = '<div class="item clearfix expenses-0" id="exp-%id%"><div class="item--description">%description%</div>' +
            '<div class="right clearfix"><div class="item--value"><span> - </span> %value% </div><div class="item--delete">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-check2-circle cancel--btn" viewBox="0 0 16 16">' +
            '<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/></svg></div></div></div>';

        }
        else if (type === 'inc'){
            element = AllDomName.IncomeContainer;
            html = '<div class="item clearfix income-0" id="inc-%id%"><div class="item--description">%description%</div>' +
            '<div class="right clearfix"><div class="item--value"><span> + </span> %value% </div><div class="item--delete">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-check2-circle cancel--btn" viewBox="0 0 16 16">' +
            '<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/></svg></div></div></div>';


        }
        // Replace html with NewHtml so that the strings can be alltered 
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);
            

            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
        },

        updateUI : (obj)  => {
            
            document.querySelector(AllDomName.ExpensesInput).textContent = obj.totalsExpenses;
            document.querySelector(AllDomName.IncomeInput).textContent = obj.totalsIncome;
            document.querySelector(AllDomName.InputCurrentBalance).textContent = obj.budget;

        },

        deleteUIType :(selectorID) =>{
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
            console.log(el);
        },
       

        clearListItem: () => {
            var fields, fieldsArr;
            fields = document.querySelectorAll(AllDomName.InputDescription + ',' + AllDomName.InputValue);

            // returing the fields data as an array
            // it returns the fields as an array
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach((current, index, array) => {
                current.value = '';

            });
            fieldsArr[0].focus();

        },

    getDomStrings: () => AllDomName
    };


})();




            // General Controller
            // TEchnically this function communicates to two functions and handles end product
var controller = (function (UIctrl, budgetController) {
    // this functon takes all event listners from the UI ctrl
    var setupEventListeners = function () {
        
    var AllDomName = UIctrl.getDomStrings();

    document.querySelector(AllDomName.InputAddBtn).addEventListener('click', ctrlAddItem)
    document.querySelector(AllDomName.containerInput).addEventListener('click', ctrlDeleteItem) 

    document.addEventListener('keypress', function () {
    if( event.keycode === 13 || event.which === 13 ){ctrlAddItem(); }

                })
    }

    const ctrlDeleteItem = function (type, id) {
        let typeID, splitID, ID ;
        typeID = event.target.parentNode.parentNode.parentNode.id;
        if(typeID){

        splitID = typeID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);


        budgetController.deleteItem(type, ID);

        UIctrl.deleteUIType(typeID);

            updateBudget()


            // Updating the function 
          
        }
    }
      

    let updatePercent = () => {
        // Calculate the percentage

    budgetController.calculatePercentages()

    //  GEt percentage

  var percentage =  budgetController.getPercent()
        
  console.log(percentage);

    }

   let  updateBudget = () => {
       var budget, UIupdate;
        // calculate the budget 
       budgetController.updateBudget()

       budget = budgetController.getBudget();

       UIctrl.updateUI(budget);
    };

    let ctrlAddItem = function () {
       
        var input, newItem, field;
        // getting the input data from the users i.e from bdget crtl and UI ctrl
        //  ALL data input 
         input = UIctrl.getInput();
        // console.log(input);
        if(input.description !== '' && input.value > 0 && input.value !==  NaN){
            
        newItem = budgetController.getAllItems(input.type, input.description, input.value    );
       console.log(newItem);

        UIctrl.addListItem(newItem, input.type);

        UIctrl.clearListItem();
        updateBudget()

        updatePercent()

        } 
        
    };
    
    return {
        init:   function () {
            console.log('Application is running');
            UIctrl.updateUI({
                budget : 0,
                percentage : -1,
                totalsIncome : 0,
                totalsExpenses : 0
            })
            setupEventListeners();
        }
    }

}) (UIcontroller, budgetController);

controller.init();


