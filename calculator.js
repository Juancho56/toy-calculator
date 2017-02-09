function calcApp() {
    let calcForm = document.querySelector('#calc-form')
    let display = document.querySelector('#display')
    let currOperand = ''
    let operand1 = 0;
    let operand2 = 0;
    let operator = '';
    let firstOperand = true;
    function processNumber(elementId) {
        const currNumber = elementId.substr(1)
        currOperand += currNumber;
        display.innerHTML = currOperand;
        calcForm.reset();
    }

    function captureCurrentNumber() {
        if (firstOperand === true) {
            operand1 = parseFloat(currOperand)
            firstOperand = false
        }
        else {
            operand2 = parseFloat(currOperand)
            firstOperand = true
        }

        currOperand = ''
    }

    function doOperation(operator, operand1, operand2) {
        console.log('operator=', operator);
        switch (operator) {
            case 'modadd':
                return '' + (operand1 + operand2)
            case 'modsubtract':
                return '' + (operand1 - operand2)
            case 'modmultiply':
                return '' + (operand1 * operand2)
            case 'moddivide':
                return '' + (operand1 / operand2)
        }
    }

    function onCalcFormChange(event) {
        console.log('event=', event);
        const buttonId = event.target.id
        if (buttonId.startsWith('a')) {
            processNumber(buttonId);
        } else if (buttonId.startsWith('mod')) {
            captureCurrentNumber();
            operator = buttonId
        } else if (buttonId === 'equalequals') {
            captureCurrentNumber();
            display.innerHTML = doOperation(operator, operand1, operand2);
        }
    }

    calcForm.addEventListener('change', onCalcFormChange)
};

calcApp();