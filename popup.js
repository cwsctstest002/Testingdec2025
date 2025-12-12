const display = document.getElementById('display');

let currentInput = '0';
let previousInput = null;
let operator = null;
let waitingForNewInput = false;  // This flag fixes the bug!

function updateDisplay() {
  display.value = currentInput;
}

// Initial display
updateDisplay();

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value') || button.textContent.trim();

    // Number buttons & decimal
    if (!isNaN(value) || value === '.') {
      if (waitingForNewInput || currentInput === '0') {
        currentInput = (value === '.') ? '0.' : value;
        waitingForNewInput = false;
      } else {
        if (value === '.' && currentInput.includes('.')) return;
        currentInput += value;
      }
    }

    // Clear
    else if (value === 'C') {
      currentInput = '0';
      previousInput = null;
      operator = null;
      waitingForNewInput = false;
    }

    // Backspace
    else if (value === 'Backspace') {
      currentInput = currentInput.slice(0, -1);
      if (currentInput === '' || currentInput === '-') currentInput = '0';
    }

    // Equals
    else if (value === '=') {
      if (operator && previousInput !== null) {
        currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
        previousInput = null;
        operator = null;
        waitingForNewInput = true;  // Next number starts fresh
      }
    }

    // Operator (+ − × ÷)
    else {
      if (previousInput !== null && !waitingForNewInput) {
        // Chain calculations: 2 + 3 = → 5 + 4 =
        currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
      }
      previousInput = currentInput;
      operator = value;
      waitingForNewInput = true;  // Important: wait for new number
    }

    updateDisplay();
  updateDisplay();
  });
});

function calculate(a, b, op) {
  switch (op) {
    case '+': return (a + b).toString();
    case '-': return (a - b).toString();
    case 'Times': return (a * b).toString();
    case 'Divide': return b !== 0 ? (a / b).toString() : 'Error';
    default: return b.toString();
  }
}