
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // valor para ser convertido para outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.4
    const bitcoinToday = 393.2

    const convertedValue = inputCurrencyValue / dolarToday

    // FORMATA E EXIBE O VALOR A SER CONVERTIDO
    //SE O SELECT ESTIVER SELECIONADO PARA DÓLAR, ENTRE AQUI 
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    //SE O SELECT ESTIVER SELECIONADO PARA EURO, ENTRE AQUI 
    if (currencySelect.value == "euro")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    //SE O SELECT ESTIVER SELECIONADO PARA LIBRA, ENTRE AQUI 
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    //SE O SELECT ESTIVER SELECIONADO PARA BITCOIN, ENTRE AQUI 
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-ie", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    //MOEDA BASE PARA CONVERTER
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dólar americano"
        currencyImage.src = "./assets/dólar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./assets/libra .png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin .png"
    }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

