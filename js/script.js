const formElement = document.querySelector(".js-form");
const amountInPLNElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const clearButton = document.querySelector(".js-clear");

function calculateAmount(amount, rate) {
    return amount * rate;
}

function updateResult(resultElement, result) {
    resultElement.innerText = result.toFixed(2);
}

function clearForm(amountElement, resultElement) {
    amountElement.value = "";
    resultElement.innerText = "N/A";
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountInPLN = parseFloat(amountInPLNElement.value);
    const currency = parseFloat(currencyElement.value);

    const result = calculateAmount(amountInPLN, currency);
    updateResult(resultElement, result);
});

clearButton.addEventListener("click", () => {
    clearForm(amountInPLNElement, resultElement);
});

