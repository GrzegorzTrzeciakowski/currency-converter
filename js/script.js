{
  function calculateAmount(amount, rate) {
    return amount * rate;
  }

  function updateResult(amountInPLN, result) {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${amountInPLN} EUR = ${result.toFixed(2)} PLN`;
  }

  function clearForm() {
    const amountInPLNElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");
    amountInPLNElement.value = "";
    resultElement.innerText = "N/A";
  }

  const formElement = document.querySelector(".js-form");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountInPLNElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const result = calculateAmount(
      parseFloat(amountInPLNElement.value),
      parseFloat(currencyElement.value)
    );
    updateResult(parseFloat(amountInPLNElement.value), result);
  });

  formElement.addEventListener("reset", (event) => {
    clearForm();
  });
}
