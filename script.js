var one, operator, two;    
var oneFlag = 0;
var twoFlag = 0;
var operatorFlag = 0;
var displayText = document.querySelector(".result");

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
    return one / two;
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
    if (operator === "*"){
        return multiply(one, two);
    }
    if (operator === "/"){
        return divide(one, two);
    }
}

const calculator = () => {
    var buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let buttonClass = e.target.classList;
            if (buttonClass.contains("number")){
                clickNumber(e);
            }
            else if (buttonClass.contains("operation")){
                if (operatorFlag === 0){
                    clickOperator(e);
                }
            }
            else if (buttonClass.contains("equal")){
                if (oneFlag === 1 && operatorFlag === 1 && !isNaN(two)){
                    twoFlag = 1;
                    let ans = operate(one, two, operator);
                    displayAns(ans);
                }
            }
            else if (buttonClass.contains("clear")){
                displayText.innerHTML = "";
                oneFlag = 0;
                twoFlag = 0;
                operatorFlag = 0;
            }
        });
    });
}

const displayAns = (ans) => {
    displayText.textContent = ans;
}

const clickNumber = (e) => {
    if (oneFlag === 0){
        displayText.textContent += e.target.textContent;
        one = +displayText.textContent;
    }
    else if (twoFlag === 0){
        if (isNaN(+displayText.textContent)){
            displayText.innerHTML = "";
        }
        displayText.textContent += e.target.textContent;
        two = +displayText.textContent;
    }
    
}

const clickOperator = (e) => {
    operator = e.target.textContent;
    displayText.textContent = operator;
    oneFlag = 1;
    operatorFlag = 1;
}

calculator();