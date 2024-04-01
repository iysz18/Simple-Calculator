// ensure the DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#resultValues');
    const allKeys = document.querySelectorAll('.btn');

    // store numbers and operator
    let firstNbr = '';
    let secondNbr = '';
    let operator = '';

    // add to each key the click event
    allKeys.forEach((key) => {
        key.addEventListener('click', () => {
            // store displayed value from the key
            const keyValue = key.getAttribute('data-key');

            // ensure to populate display with allowed key's
            if (keyValue !== 'AC' && keyValue !== '=' && keyValue !== '%'){
                if (display.textContent === '0') display.textContent = '';
                display.textContent += keyValue;
            } 
            
            // store the first, second and operator
            if (!isNaN(keyValue)) {
                if (firstNbr === '') firstNbr = keyValue;
                else if (secondNbr === '') secondNbr = keyValue;
            } else if (operator === '') operator = keyValue;

            
            
            // some keys do actions, identify them and use them
            let result = '';
            switch (keyValue) {
                case 'AC':
                    display.textContent = ''; // clear the display
                    firstNbr = secondNbr = operator = '';
                    break;
                case '=':
                    result = String(operate(Number(firstNbr), Number(secondNbr), operator));
                    display.textContent = result;
                    operator = '';
                    secondNbr = '';
                    firstNbr = result;
            }
        });
    });
});

function operate(firstNbr, secondNbr, operator) {
    switch (operator) {
        case '+':
            return add(firstNbr, secondNbr);
        case '-':
            return sub(firstNbr, secondNbr);
        case 'x':
            return multi(firstNbr, secondNbr);
        case '/':
            return div(firstNbr, secondNbr);
    }
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    if (a < b) [a, b] = [b ,a];
    
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    if (a < b) [a, b] = [b, a];

    return a / b;
}