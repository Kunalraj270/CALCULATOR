 'use script'

// Dark mode
var toggled = false;

// var hTag = document.getElementsByTagName('h1')[0];
var calculator = document.getElementById('calculator');
var circle = document.getElementById('circle');

document.getElementById('circle').onclick = function () {
    if (!toggled) {
        //  hTag.classList.add('color-white');
        calculator.classList.add('bck-color-black');
        circle.style.marginLeft = '23px';

        toggled = true;

    } else {
        // hTag.classList.remove('color-white');
        calculator.classList.remove('bck-color-black');
        circle.style.marginLeft = '1px';

        toggled = false;
    }
}

var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == '+' || value == '-' || value == '*' || value == '/';
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();


        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = '';
        } else if (value == 'ac') {
            display.textContent = '';
        } else if (value == 'sign') {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == '.') {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == '%') {
           operand1 = parseFloat(text);
           operand1 = operand1 / 100;
           display.textContent = operand1;
        } else if (value == '=') {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else if (value == 'del') {
            
        } else {
            display.textContent += value;
        }



    });
}
