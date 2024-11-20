const displayResult = document.querySelector('.result');
    displayResult.addEventListener('dragstart', (event) => event.preventDefault());

 
keyboardSupport()


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

function deleteLastChar () {
        const backspaceButton = document.querySelector('#backspace');
        backspaceButton.addEventListener('dragstart', (event) => event.preventDefault());
        backspaceButton.addEventListener('selectstart', (event) => event.preventDefault());
        
        backspaceButton.addEventListener('click', () => {
                if (operator === '') {
                firstNumber = firstNumber.slice(0, -1);
                displayResult.textContent = firstNumber || '0';
            } else {
                secondNumber = secondNumber.slice(0, -1);
                displayResult.textContent = secondNumber || '0';
            }
        });
    }


deleteLastChar()

function preventSelect () {
    const container = document.querySelectorAll('.screen');
    container.forEach(elem => {
        container.addEventListener('dragstart', (event) => event.preventDefault());
        container.addEventListener('selectstart', (event) => event.preventDefault());
    })
}

preventSelect()

function keyboardSupport() {
    window.addEventListener('keydown', function(event) {
        let targetKey = event.key;
        let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let oper = ['+', '/', '-', '*', '%']

        switch(targetKey) {
            case 'Enter': 
                const equalButton = document.querySelector('#equal');
                equalButton.click();
                equalButton.focus();
                break;
            case '.': 
                const decimalButton = document.querySelector('#decimal');
                decimalButton.click();
                decimalButton.focus();
                break;
            case 'Escape': 
                const clearButton = document.querySelector('#clear');
                clearButton.click();
                clearButton.focus();
                break;
        }


        
            if(nums.includes(targetKey)) {
               let keyNums = document.getElementById(targetKey)
               keyNums.click()
               keyNums.focus()
            } else if (oper.includes(targetKey)) {
                let keyOper = document.getElementById(targetKey)
                keyOper.click()
                keyOper.focus()
            }
        event.preventDefault();  
    });
};
