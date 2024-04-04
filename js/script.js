document.addEventListener('DOMContentLoaded', () => {
    // reference each DOM element needed for this calculator
    const displayContent = document.querySelector('#resultValues');
    const allBtns = document.querySelectorAll('button');

    // give each btn from the allBtns nodelist click event
    allBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // store the value of the btn for better access and operator attribute
            const operatorClass = btn.classList.contains('operator'); 
            const btnValue = btn.getAttribute('data-key');

            // store each clicked number and operator
            let firstNum = '';
            let secondNum = '';
            let operator = '';

            // populate the display with allowed btnValues & set the display to empty if any button has been clicke
            if (displayContent.textContent === '0') displayContent.textContent = '';
            if (!isNaN(btnValue) || operatorClass || btnValue === '.') {
                displayContent.textContent += btnValue;
            }
            else if (btnValue === 'AC') {
                // reset display, firstNum, secondNum & operator
                displayContent.textContent = '0';
                firstNum = secondNum = operator = '';
            }
        });
    });
});