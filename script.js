/*display = document.getElementById('display');

document.body.addEventListener('keyup', function (event) {
    console.log(event.keyCode);
    display.textContent = event.keyCode;
})

let num1 = 5;
let num2 = 1;
let displayValue = 0;





function add(a, b) {
    return +a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else return "Can't divide by 0!"
}

function modulo(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': add(a, b);
            break;
        case '-': subtract(a, b);
            break;
        case '*': multiply(a, b);
            break;
        case '/': divide(a, b);
            break;
        case '%': modulo(a, b);
            break;
        default: console.log('Please select an operator');
    }
}

function backToZero() {
    display.textContent = '0';
    num1 = 0;
    num2 = 0;
}


/*let num1 = 0;
let num2 = 0;
let displayValue = 0;
let result = 0;

display = document.getElementById('display');
displayedNumber = '';


document.body.addEventListener('keyup', function (event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 48:
        case 96: if (displayedNumber[0]) {
            displayedNumber+= '0';
            display.textContent = displayedNumber;
        };
            break;
        case 49:
        case 97: displayedNumber += '1';
            display.textContent = displayedNumber;
            break;
        case 50:
        case 98: displayedNumber += '2';
            display.textContent = displayedNumber;
            break;
        case 51:
        case 99: displayedNumber += '3';
            display.textContent = displayedNumber;
            break;
        case 52:
        case 100: displayedNumber += '4';
            display.textContent = displayedNumber;
            break;
        case 53:
        case 101: displayedNumber += '5';
            display.textContent = displayedNumber;
            break;
        case 54:
        case 102: displayedNumber += '6';
            display.textContent = displayedNumber;
            break;
        case 55:
        case 103: displayedNumber += '7';
            display.textContent = displayedNumber;
            break;
        case 56:
        case 104: displayedNumber += '8';
            display.textContent = displayedNumber;
            break;
        case 57:
        case 105: displayedNumber += '9';
            display.textContent = displayedNumber;
            break;
        case 8: backToZero();
            break;
        case 107: add();
            break;
        case 109: subtract();
            break;
        case 106: multiply();
            break;
        case 111: divide();
            break;
        case 191: modulo();
            break;
        case 13: showResult();
    }
})







function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else return "Can't divide by 0!"
}

function modulo(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': add(a, b);
            break;
        case '-': subtract(a, b);
            break;
        case '*': multiply(a, b);
            break;
        case '/': divide(a, b);
            break;
        case '%': modulo(a, b);
            break;
        default: console.log('Please select an operator');
    }
}

function backToZero() {
    display.textContent = '0';
    num1 = 0;
    num2 = 0;
    displayedNumber = '';
}

function resetDisplay() {
    displayedNumber = '';
}


function add() {
    console.log('add called!');
    if (num1 === 0) {
        num1 = Number(displayedNumber);
        console.log(`num1 is ${num1}`);
        resetDisplay();
        display.textContent = '0'
    } else {
        num2 = Number(displayedNumber);
        console.log(`num2 is ${num2}`)
        let result = num1 + num2;
        console.log(`result is ${result}`);
        display.textContent = result;
      
        num1 = result;
    }
    resetDisplay();
}

function subtract() {
    if (num1 === 0) {
        num1 = Number(displayedNumber);
        resetDisplay();
        display.textContent = '0'
    } else {
        num2 = Number(displayedNumber);
        let result = num1 - num2;
        display.textContent = result;
        num1 = result;
    }
    resetDisplay();
}

function multiply() {
    if (num1 === 0) {
        num1 = Number(displayedNumber);
        console.log(`multiply: num1 is ${num1} `);
        resetDisplay();
        display.textContent = '0'
    } else {
        num2 = Number(displayedNumber);
        let result = num1 * num2;
        display.textContent = result;
        num1 = result;
    }
    resetDisplay();
}

function divide() {
    if (num1 === 0) {
        num1 = Number(displayedNumber);
        resetDisplay();
        display.textContent = '0'
    } else {
        num2 = Number(displayedNumber);
        if (num2 !== 0) {
            let result = num1 / num2;
            display.textContent = result;
            num1 = result;
        } else display.textContent = `Can't divide by 0!`;

    }
    resetDisplay();
}

function modulo() {
    if (num1 === 0) {
        num1 = Number(displayedNumber);
        resetDisplay();
        display.textContent = '0'
    } else {
        num2 = Number(displayedNumber);
        if (num2 !== 0) {
            let result = num1 % num2;
            display.textContent = result;
            num1 = result;
        } else display.textContent = `Can't divide by 0!`;

    }
    resetDisplay();
}

function showResult() {
    display.textContent = num1;
} */



// de activat o clasa hover pe buton atunci cand am selectat o actiune

// trebuie refacut (probleme la alegerea operatiei) -> aleg num1,

//debugger

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




// luam nr afisat -> il punem in var num1 atunci cand apasam pe un operator apoi luam al doilea numar si facem calculul;


function equals() {
    display.textContent = result;
}




/*function appendNumber(num) {
    console.log(num);
    displayedNumber += num;
    display.textContent = displayedNumber;
    if(displayedNumber.indexOf('+') > -1) {
        console.log(displayedNumber.indexOf('+'))
        signIndex = displayedNumber.indexOf('+')
        
        num1 = Number(displayedNumber.slice(0, signIndex));
        console.log(`num1 is ${num1}`);
        console.log(`counter: ${displayedNumber.lastIndexOf('+')} firstIndex: ${displayedNumber.indexOf('+')}`)
        // dupa ce apasam pe operator (+, -, / etc) putem sa afisam doar al doilea numar;
        num2 = Number(displayedNumber.slice(signIndex));
        console.log(`num2 is ${num2}`);

        //cum obtinem rezultatul? la apasarea unui operator sau a unui 
        // displayedNumber.lastIndexOf - displayedNumber.indexOf >0 => trebuie sa afisam result?
    }
    
} */

// tot la appendNumber -> cu split;
// la aparitia operatorului afisam 0 pe ecran si incepem sa facem append pe numere;
// trebuie facuta verificare sa nu avem 0 la inceput pe num2 pentru ca displayedNumber deja exista;
// verificam ca displayedNumber[displayedNumber.indexOf(operator) + 1] sa nu fie 0
// cand apare un operator facem displayedNumber.split('+') -> array de 2 nr [num1, num2]; 
// afisam doar num2 cand apare +;
// daca avem num1 si num2 !=0 in array vom face operatia, apoi rezultatul se muta pe num1 si num2 devine 0 -> pe ecran afisam rezultatul
// trebuie sa ne intoarcem la situatia cu num1 = result si num2 = 0;




function appendNumber(num) {
    displayedNumber += num;
    display.textContent = displayedNumber;
    setSecondNumber();
}



let operator = '';

function setOperator(sign) {
    operator = sign;
    num1 = Number(displayedNumber);
    displayedNumber = '';
    display.textContent = '';
    console.log(`setOperator was called. Here are the stats: num1 is ${num1}, operator is ${operator}`);
}


function setSecondNumber() {
    if(operator !== '' && num1 !== 0) {
        num2 = Number(displayedNumber);
        console.log(`num2 is ${num2}`);
    }
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+' : add(num1, num2);
        break;
        case '-' : subtract(num1, num2);
        break;
        case '/' : divide(num1, num2);
        break;
        case '*' : multiply(num1, num2);
        break;
        case ('%') : modulo(num1, num2);
        break;
    }
    displayedNumber ='';
    operator = '';
}

function add(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    firstNumber = result;
    displayedNumber = result;
    secondNumber = 0;
    display.textContent = result;
    operator = '';
}

function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    firstNumber = result;
    displayedNumber = result;
    secondNumber = 0;
    display.textContent = result;
    operator = '';
}

function divide(firstNumber, secondNumber) {
    if(secondNumber !== 0) {
        result = firstNumber * secondNumber;
        firstNumber = result;
        displayedNumber = result;
        secondNumber = 0;
        display.textContent = result;
    } else {
        display.textContent = `Can't divide by 0!`;
    }
    operator = '';
}

function modulo(firstNumber, secondNumber) {
    result = firstNumber % secondNumber;
    firstNumber = result;
    displayedNumber = result;
    secondNumber = 0;
    display.textContent = result;
    operator = '';
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
// daca am num1 !== 0 && num2 !== 0 -> click pe operator va face calculul si abia apoi va muta result pe num1;