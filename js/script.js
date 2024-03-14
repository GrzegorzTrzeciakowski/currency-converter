const formElement = document.querySelector(".js-form");
const amountInPLNElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const clearButton = document.querySelector(".js-clear");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountInPLN = amountInPLNElement.value;
    const currency = currencyElement.value;

    const result = amountInPLN * currency;

    resultElement.innerText = result.toFixed(2);
});

clearButton.addEventListener("click", () => {
    amountInPLNElement.value = "";
    resultElement.innerText = "N/A";
});
