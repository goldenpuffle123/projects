const calculatorDiv = document.querySelector("#div-calculator");
const displayText = document.querySelector("#display-text")
const DISPLAY_ROUND = 3;
calculatorDiv.addEventListener(
    "click",
    (e) => {
        handleButton(e.target);
    }
);

let displayString = "";
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = 0;
let state = 0;
// 0: FIRST NUMBER
// 1: operator
// 2: SECOND NUMBER
// 3: operator

function handleButton(btn) {
    let btnClass = btn.classList;
    let btnText = btn.textContent;
    if(btn.id == "button-clear"){
        num1 = 0;
        num2 = 0;
        displayString = "";
        operator = 0;
        state = 0;
    }
    switch(state) {
        case 0:
            if(btnClass.contains("digit")) {
                let digit = parseInt(btnText);
                num1 = num1*10 + digit;
                displayString += btnText; // Concat
                state = 1;
            }
            break;
        case 1:
            if(btnClass.contains("digit")) { // Maintain state
                let digit = parseInt(btnText);
                num1 = num1*10 + digit;
                displayString += btnText; // Concat
            }
            else if(btnClass.contains("operator")) {
                operator = getOperator(btn.id);
                if(operator > 0) { // Not equals
                    displayString += ` ${btnText} `;
                    state = 2;
                }
            }
            break;
        case 2:
            if(btnClass.contains("digit")) { // Maintain state
                let digit = parseInt(btnText);
                num2 = num2*10 + digit;
                displayString += btnText; // Concat
                state = 3;
            }
            break;
        case 3:
            if(btnClass.contains("digit")) { // Maintain state
                let digit = parseInt(btnText);
                num2 = num2*10 + digit;
                displayString += btnText; // Concat
            }
            else if(btnClass.contains("operator")) {
                result = getResult(operator);
                num1 = result;
                num2 = 0;
                displayString = "";
                if(Number.isInteger(result)){
                    displayString += num1;
                }
                else{
                    displayString += Math.round(num1*10**DISPLAY_ROUND)/(10**DISPLAY_ROUND);
                }
                
                operator = getOperator(btn.id);
                if(operator > 0) { // Not the equal operator
                    displayString += ` ${btnText} `;
                    state = 2;
                }
                else {
                    state = 1;
                }
            }
            break;            
    }
    displayText.textContent = displayString;
    display(displayString);
}

function getOperator(btnID) {
    switch(btnID){
        case "button-equals":
            return 0;
        case "button-add":
            return 1;
        case "button-subtract":
            return 2;
        case "button-multiply":
            return 3;
        case "button-divide":
            return 4;
    }
}

function getResult(operator) {
    switch(operator) {
        case 1:
            return num1+num2;
        case 2:
            return num1-num2;
        case 3:
            return num1*num2;
        case 4:
            return num2!=0 ? num1/num2 : undefined
    }
}

function display(str) {
    displayText.textContent = str;
}