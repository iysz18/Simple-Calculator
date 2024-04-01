// ensure the DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    let firstNbr = '';
    let secondNbr = '';
    let operator = '';

    // references to elements needed for the calculation
    const display = document.querySelector('#resultValues');
    const allKeys = document.querySelectorAll('.btn');

    // add to each member of allKey nodelist clicke event to populate the display
    allKeys.forEach(key => {
        key.addEventListener('click', () => {
            // reset the display
            if (display.textContent === '0') display.textContent = '';

            
            // to populate the display and to store numbers
            const dataKey = key.getAttribute('data-key');
            if (key.classList.contains('number')) {
                if (!firstNbr) firstNbr = dataKey;
                else if (!secondNbr) secondNbr = dataKey;
                display.textContent += dataKey;
            }
            else if (key.classList.contains('operator')) {
                if (!operator) operator = dataKey;
                display.textContent += dataKey;
            }


            // ensure that specific key's content won't appear on the display
            switch (dataKey) {
                case 'AC':
                    display.textContent = '';
                    // reset the storage of each input
                    firstNbr = secondNbr = operator = '';
                    break;
                case '=':
                    display.textContent = String(operate(firstNbr, secondNbr, operator));
                    break;
            }
        });
    });
    
});

function operate(first, second, operator) {
    let a = Number(first);
    let b = Number(second);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case 'x':
            return multi(a, b);
        case '/':
            return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    if (a < b) [a, b] = [b, a];
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a < b) [a, b] = [b, a];
    return a / b;
}