const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyvalue = document.querySelector(".input-currency").value

    const currencyValueToconvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const euroToday = 6.2
    const dolarToday = 5.2
    const convertValues = inputCurrencyvalue / dolarToday


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyvalue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyvalue / euroToday)

    }

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyvalue)



}

function changecurrency(){
    const currencyName = document.getElementById("currency-name")
    if (currencySelect.value == "dolar") 
        currencyName.innerHTML = "Dolar" 
}


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro" 

}


currencySelect.addEventListener("change" , changecurrency)

convertButton.addEventListener("click", convertValues)