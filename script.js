let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("display").value = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        document.getElementById("display").value = currentInput;
    } catch (error) {
        currentInput = "Error";
        document.getElementById("display").value = currentInput;
    }
}

function calculateSqrt() {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.sqrt(num).toString();
        document.getElementById("display").value = currentInput;
    }
}

function calculatePow() {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 2).toString();
        document.getElementById("display").value = currentInput;
    }
}

function calculateSin() {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.sin(num).toString();
        document.getElementById("display").value = currentInput;
    }
}

function calculateCos() {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.cos(num).toString();
        document.getElementById("display").value = currentInput;
    }
}

function calculateTan() {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.tan(num).toString();
        document.getElementById("display").value = currentInput;
    }
}
