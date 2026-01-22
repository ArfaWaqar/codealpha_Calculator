let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}

function calculate() {
    try {
        // Convert percentage into division by 100
        let expression = display.innerText.replace(/%/g, "/100");
        display.innerText = eval(expression);
    } catch {
        display.innerText = "Error";
    }
}

/* Keyboard Support */
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        appendValue(key);
    } else if (["+", "-", "*", "/", "%"].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

