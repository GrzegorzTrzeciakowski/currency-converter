const formElement = document.querySelector(".js-form");
const amountInPLNElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const clearButton = document.querySelector(".js-clear");

function calculateAmount(amount, rate) {
    return amount * rate;
}

function updateResult(resultElement, amountInPLN, currency, result) {
    resultElement.innerText = `${amountInPLN} PLN = ${result.toFixed(2)} ${currency}`;
}

function clearForm(amountElement, resultElement) {
    amountElement.value = "";
    resultElement.innerText = "";
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountInPLN = parseFloat(amountInPLNElement.value);
    const currency = parseFloat(currencyElement.value);

    const result = calculateAmount(amountInPLN, currency);
    updateResult(resultElement, amountInPLN, currencyElement.selectedOptions[0].text, result);
});

clearButton.addEventListener("click", () => {
    clearForm(amountInPLNElement, resultElement);
});
