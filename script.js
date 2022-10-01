let result = 0;
let num1 = 0;
let num2 = 0;
let displayedNumber = '';
const display = document.getElementById('display');
document.body.addEventListener('keyup', function (event) {
    console.log(event.code);
    switch (event.code) {
        case 'Digit0': if (displayedNumber[0]) {
            appendNumber('0')
        };
            break;
        case "Digit1": appendNumber('1')
            break;
        case 'Digit2': appendNumber('2')
            break;
        case 'Digit3': appendNumber('3')
            break;
        case 'Digit4': appendNumber('4')
            break;
        case 'Digit5': appendNumber('5')
            break;
        case 'Digit6': appendNumber('6')
            break;
        case 'Digit7': appendNumber('7')
            break;
        case 'Digit8': appendNumber('8')
            break;
        case 'Digit9': appendNumber('9')
            break;
        case 'Backspace': backToZero();
            break;
    }
})


function checkForZero() {
    if(!displayedNumber[0] || displayedNumber[0] !== '0') {
        appendNumber('0');
    }
}

function comma() {
    if(!displayedNumber[0]) {
        appendNumber('0.');
    } else appendNumber('.')
}


function appendNumber(num) {
    console.log(`appendNumber apelat: num1 = ${num1} si num2 = ${num2}`)
    displayedNumber += num;
    display.textContent = displayedNumber;
    setSecondNumber();
}



let operator = '';

function setOperator(sign) {
    operator = sign;
    if(num1 === 0) {
        num1 = Number(displayedNumber);
        displayedNumber = '';
        display.textContent = '';
        console.log(`setOperator was called. Here are the stats: num1 is ${num1}, operator is ${operator}`);
    }
    if(num1 !== 0) {
        console.log(`num1 = ${num1} diferit de 0!`)
        num2 = Number(displayedNumber);
        if(num2 !== 0 && (operator === "/" || operator === '%')) {
            operate(operator);
        } 
         if(operator !== '/') {
            operate(operator)
        }
    }

}


function setSecondNumber() {
    if(operator !== '' && num1 !== 0) {
        num2 = Number(displayedNumber);
        console.log(`inside setSecondNumber -> num2 is ${num2}`);
    }
}

function operate(operator) {
    switch(operator) {
        case '+' : add();
        break;
        case '-' : subtract();
        break;
        case '/' : if(num2 !== 0) {
            divide();
        } else display.textContent = `Can't divide by 0!`
        break;
        case '*' : multiply();
        break;
        case ('%') : modulo();
        break;
    }
    displayedNumber ='';
}

function add() {
    console.log(`+ apasat`)
    result = num1 + num2;
    num1 = result;
    displayedNumber = result;
    num2 = 0;
    display.textContent = result;
}

function multiply() {
    if(num2 !== 0) {
        console.log(`* apasat: num1 = ${num1}; num2 = ${num2}`);
        result = num1 * num2;
        num1 = result;
        displayedNumber = result;
        num2 = 0;
        display.textContent = result;
    }
}

function divide() {
    if(num2 !== 0) {
        result = num1 / num2;
        num1 = result;
        displayedNumber = result;
        num2 = 1;
        display.textContent = result;
    }
}

function modulo() {
    if(num2 !== 0) {
        result = num1 % num2;
        num1 = result;
        displayedNumber = result;
        num2 = 0;
        display.textContent = result;
    }
}

function subtract() {
    result = num1 - num2;
    num1 = result;
    displayedNumber = result;
    num2 = 0;
    display.textContent = result;
}

function backToZero() {
    display.textContent = '0';
    num1 = 0;
    num2 = 0;
    displayedNumber = '';
    operator = '';
}




function test(){
    console.log(`inside test: operator ${operator}`);
}


// to modify : if displayedNumber[0] = 0 -> can't append any other number;
// might add a checkLength function for numbers in appendNumber in order to keep the length to a max of 9 digits
// to add -> when num1 !== 0 && num2 !== 0 => clicking on the operator -> does the operation and prints the result

// idee pt mai multe operatii legate :
// daca am num1 !== 0 && num2 !== 0 -> click pe operator va face calculul si abia apoi va muta result pe num1; -> pe functia setOperator

// how to make the add() function set my global values?


// in html la onclick pe 0 : if(displayedNumber[0]){appendNumber('0')}