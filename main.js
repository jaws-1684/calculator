const displayResult = document.querySelector('.result');
    displayResult.addEventListener('dragstart', (event) => event.preventDefault());

 


function add (a ,b) {
    return a+b;
};

function subtract (a, b) {
    return a-b;
};

function multiply (a, b) {
    return a*b;
};

function divide(a, b) {
    if (b === 0) {
        return "404";
    }
    return a / b;
};

function remainder(a, b) {
    if (b === 0) {
        return "404";
    }
    return a % b;
};

let firstNumber = '';
let operator = '';
let secondNumber = '';


function operate (operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '×': return multiply(firstNumber, secondNumber);
        case '÷': return divide(firstNumber, secondNumber);
        case '%': return remainder(firstNumber, secondNumber);
        default: return null; 
    };

};

let calculationComplete = false; 

function populateDisplay() {
    const nums = document.querySelectorAll('.btn.num');
    const operators = document.querySelectorAll('.btn.operand');
    const decimal = document.querySelector('#decimal');
  

    nums.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const content = event.target.textContent;

            
            if (calculationComplete) {
                firstNumber = '';
                calculationComplete = false;
            }

            if (operator === '') {
                firstNumber += content;
                displayResult.textContent = firstNumber;
            } else {
                secondNumber += content;
                displayResult.textContent = secondNumber;
            }
        });
    });

    operators.forEach(operatorButton => {
        operatorButton.addEventListener('click', (event) => {
            if (calculationComplete) {
                calculationComplete = false;
            }
            operator = event.target.textContent;
        });
    });

    decimal.addEventListener('click', () => {
        if (calculationComplete) {
            firstNumber = '';
            calculationComplete = false;
        }

        if (operator === '') {
            if (!firstNumber.includes('.')) {
                firstNumber += '.';
                displayResult.textContent = firstNumber;
            }
        } else {
            if (!secondNumber.includes('.')) {
                secondNumber += '.';
                displayResult.textContent = secondNumber;
            }
        }
    });
}


populateDisplay()
keyboardSupport();

function signToggle() {
    const sign = document.querySelector('#sign-toggle');
    sign.addEventListener('click', () => {
        let currentValue = parseFloat(displayResult.textContent);
        displayResult.textContent = currentValue * -1;
    });
}

signToggle();

function calculate() {
    const equal = document.querySelector("#equal");
    equal.addEventListener('click', () => {
        if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);

            const operResult = operate(operator, num1, num2);

            displayResult.textContent = operResult;

            firstNumber = operResult;

            secondNumber = '';
            operator = '';
        } else {
            console.log('404');
        }
    });
}

calculate()

function calculate() {
    const equal = document.querySelector("#equal");
    equal.addEventListener('click', () => {
        if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            const operResult = operate(operator, num1, num2);
            displayResult.textContent = operResult;
            firstNumber = operResult.toString();
            secondNumber = '';
            operator = '';
            calculationComplete = true; 
        } else {
            displayResult.textContent = 'Error'; 
        }
    });
}

function clearResultBox () {
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', (event) => {
            displayResult.textContent = ''
            firstNumber = '';
            secondNumber = '';
            operator = '';
        
    });
    
};

clearResultBox()

deleteLastChar()

function preventSelect () {
    const container = document.querySelectorAll('.screen');
    container.forEach(elem => {
        container.addEventListener('dragstart', (event) => event.preventDefault());
        container.addEventListener('selectstart', (event) => event.preventDefault());
    })
}

preventSelect()

// function keyboardSupport() {
  
// }

