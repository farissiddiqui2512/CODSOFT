let currentInput = '';
let result = '';
const display = document.getElementById('display');

function appendToScreen(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    result = '';
    display.textContent = '0';
}

function calculate() {
    try {
        result = eval(currentInput);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}
