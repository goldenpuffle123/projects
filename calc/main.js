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
let opDone = false;

function handleButton(btn) {
    let btnClass = btn.classList;
    let btnText = btn.textContent;
    if(btnClass.contains("digit")) {
        let digit = parseInt(btnText);
        if(opDone == false) {
            num1 = num1*10 + digit;
        }
        else {
            num2 = num2*10 + digit;
        }
        displayString += btnText;
    }
    else if(btnClass.contains("operation")) {
        if(opDone == false){
            operator = handleOperation(btn.id);
            if(operator > 0){
                displayString += ` ${btnText} `;
                opDone = true;
            }
            else{
                reset();
            }
        }
        else {
            result = getResult(operator);
            reset();
            num1 = result;
            if(!Number.isInteger(result)) {
                displayString += (Math.round(num1*10**DISPLAY_ROUND)/(10**DISPLAY_ROUND));
            }
            else {
                displayString += num1;
            }
            console.log(result);
            operator = handleOperation(btn.id);
            if(operator > 0){
                displayString += ` ${btnText} `
            }
            else{
                opDone = false;
            }
        }
    }
    else {
        if(btn.id == "button-clear"){
            reset();
            operator = 0;
            opDone = false;
        }
    }
    display(displayString);
}

function handleOperation(btnID) {
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

function getResult(operation) {
    switch(operation) {
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

function reset() {
    num1 = 0;
    num2 = 0;
    displayString = "";
    displayText.textContent = displayString;
}

function display(str) {
    displayText.textContent = str;
}