
const add = (one, two) => {
    return one + two;
};

const subtract = (one, two) => {
    return one - two;
};

const divide = (one, two) => {
    if (two === 0){
        return "DON'T EVEN TRY";
    }
    return (one / two).toFixed(3);
}

const multiply = (one, two) => {
    return one * two;
};

const operate = (one, two, operator) => {
    if (operator === '+'){
        return add(one, two);
    }
    if (operator === "-"){
        return subtract(one, two);
    }
    if (operator === "×"){
        return multiply(one, two);
    }
    if (operator === "÷"){
        return divide(one, two);
    }
}

const calculator = () => {
    var one = 0; 
    var operator; 
    var two = 0;    
    var oneFlag = 0;
    var twoFlag = 0;
    var ansFlag = 0;
    var operatorFlag = 0;
    var displayText = document.querySelector(".result");
    var buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let buttonClass = e.target.classList;
            if (buttonClass.contains("number")){
                if (oneFlag === 0){
                    one = clickNumberOne(e, displayText);
                }
                else if (twoFlag === 0){
                    two = clickNumberTwo(e, displayText);
                }
            }
            else if (buttonClass.contains("operation")){
                if (operatorFlag === 0 && displayText.textContent.length !== 0){
                    operator = clickOperator(e, displayText);
                    oneFlag = 1;
                    operatorFlag = 1;
                }
            }
            else if (buttonClass.contains("equal")){
                if (oneFlag === 1 && operatorFlag === 1 && !isNaN(two)){
                    twoFlag = 1;
                    const ans = operate(one, two, operator);
                    displayAns(ans, displayText);
                    one = ans;
                    twoFlag = 0;
                    operatorFlag = 0;
                }
            }
            else if (buttonClass.contains("clear")){
                displayText.innerHTML = "";
                oneFlag = 0;
                twoFlag = 0;
                operatorFlag = 0;
            }
            else if (buttonClass.contains("backspace")){
                if (oneFlag === 0){
                    one = clickBackspace(one, displayText);
                }
                else{
                    two = clickBackspace(two, displayText);
                }
            }
        });
    });
}

const displayAns = (ans, displayText) => {
    displayText.textContent = ans;
}

const clickNumberOne = (e, displayText) => {
    displayText.textContent += e.target.textContent;
    one = +displayText.textContent;
    
    return one;
}

const clickNumberTwo = (e, displayText) => {
    if (isNaN(+displayText.textContent)){
        displayText.innerHTML = "";
    }
    displayText.textContent += e.target.textContent;
    two = +displayText.textContent;
    return two;
}

const clickOperator = (e, displayText) => {
    operator = e.target.textContent;
    displayText.textContent = operator;

    return operator;
}

const clickBackspace = (number, displayText) => {
    displayText.textContent = displayText.textContent.slice(0, -1);
    number = Math.floor(number / 10);
    return number;
}

calculator();