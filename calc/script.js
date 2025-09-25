let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

function setOperation(op) {
  if (currentInput === '') return; // Prevent operation if no number is entered
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (previousInput === '' || currentInput === '') return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Erro';
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  document.getElementById('result').value = currentInput;
}

function clearResult() {
  currentInput = '';
  previousInput = '';
  operator = null;
  document.getElementById('result').value = '';
}
