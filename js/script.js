document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#resultValues');
    const allKeys = document.querySelectorAll('.btn');
    const decimalBtn = document.querySelector('.float');

    let firstNum = '';
    let secondNum = '';
    let operator = '';
    let result = 0;
    const operArr = ['+', '-', 'x', '/'];
    
    allKeys.forEach(btn => {
        btn.addEventListener('click', () => {
            const btnData = btn.getAttribute('data-key');
            switch (btnData) {
                case 'AC':
                    display.textContent = '';
                    firstNum = secondNum = operator = '';
                    decimalBtn.disabled = false;
                    break;
                case '=':
                    result = operate(Number(firstNum), Number(secondNum), operator);
                    display.textContent = String(result);

                    // show message if there is no calculation possible
                    if (firstNum < 1 || secondNum.length < 1 || operator.length < 1) display.textContent = 'ERROR!'
                    
                    break;
                    case '%':
                        if (operator && secondNum) {
                            // Calculate percentage based on the current operation
                            const percentage = operate(Number(firstNum), Number(secondNum), operator) / 100;
                            display.textContent = percentage.toFixed(2);
                        }
                        break;
                default:
                    if (!isNaN(btnData) || btnData === '.') {
                        if (!operator) {
                            // Concatenate digits to firstNum if operator is not set
                            firstNum += btnData;
                            display.textContent += btnData;
                            if (firstNum.includes('.')) decimalBtn.disabled = true;
                        } else {
                            // Concatenate digits to secondNum if operator is set
                            secondNum += btnData;
                            display.textContent += btnData;
                            if (secondNum.includes('.')) decimalBtn.disabled = true;
                        }
                    } else if (operArr.includes(btnData)) {
                        if (!operator) {
                            operator = btnData;
                            display.textContent += btnData;
                            decimalBtn.disabled = false;
                        }
                    }
            }
        });
    });
});

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b; 
        case 'x':
            return a * b;
        case '/':
            return a / b;
    }
}
