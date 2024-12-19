
// Function to display content in the text input field
function displayContent(value) {
    let resultField = document.getElementById("result");
    if (resultField.value == "0") {
        resultField.value = value; // Replace '0' with first digit
    } else {
        resultField.value += value; // Append the clicked value
    }
}

// Function to clear the text field (AC button)
function calcClearScreen() {
    document.getElementById("result").value = "0"; // Reset the screen to 0
}

// Function to delete the last character
function deleteLastCharacter() {
    let resultField = document.getElementById("result");
    if (resultField.value.length > 1) {
        resultField.value = resultField.value.slice(0, -1); // Remove the last character
    } else {
        resultField.value = "0"; // If the field is empty, reset to 0
    }
}

// Function to calculate the result when the "=" button is clicked
function calculateResult() {
    let resultField = document.getElementById("result");
    try {
        resultField.value = eval(resultField.value); // Evaluate the mathematical expression
    } catch (error) {
        resultField.value = "Error"; // In case of invalid input, display an error
    }
}