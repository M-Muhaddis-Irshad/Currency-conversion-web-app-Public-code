// Getting DropDowns Start's______________________________________________

// 1st Dropdown______________________________
const fromDdown = document.getElementById('from_dropdown');
// 2nd Dropdown______________________________
const toDdown = document.getElementById('to_dropdown');

// Getting DropDowns End's______________________________________________

const button = document.getElementsByTagName('button')[0];
const userInput = document.getElementById('input');

// Converted value Box___________________________
const convertedCrncyBox = document.getElementById('afterConvert');

async function convertCurrency() {

    let amount = 1;

    if (userInput.value !== "") {
        amount = userInput.value;
        console.log(amount);
    }
    else {
        amount = 1;
    }

    try {
        const currencyApi = await fetch(`https://v6.exchangerate-api.com/v6/dca197b6c0906c69b50495d2/pair/${fromDdown.value}/${toDdown.value}/${amount}`);

        // console.log(currencyApi);

        const response = await currencyApi.json();
        console.log(response);

        const { conversion_rate, conversion_result, target_code, base_code } = response;
        console.log(`
From: ${base_code} To: ${target_code} 
Converted rate: ${conversion_result}(${target_code}) 
        `);

        // convertedCrncyBox.innerHTML = `
        // <h3> ${base_code} </h3>
        // <h4> To </h4>
        // <h3> ${conversion_result} <h4>${target_code}</h4> </h3>
        // `

    } catch (error) {
        console.error('Not fetched');

    }

}

// Both DropDowns 1st option removing function() Start's____________________________________

const from_1stVal = document.getElementById('fromVal1');
const to_1stVal = document.getElementById('toVal1');

if (fromDdown.value !== 0 || toDdown.value !== 0) {
    from_1stVal.style.display = 'none';
    to_1stVal.style.display = 'none';
}

// Both DropDowns 1st option removing function() End's____________________________________

// Button & Input disabling/enabling function Start's____________________________________

function onCurrencySelect() {
    const crncy1 = fromDdown.value;
    const crncy2 = toDdown.value;

    // console.log(crncy1, crncy2);

    if (crncy1 !== "0") {
        userInput.removeAttribute('disabled');
        userInput.style.cursor = 'text';
        userInput.style.display = 'block';
    }
    if (crncy1 !== "0" && crncy2 !== "0") {
        button.removeAttribute('disabled');
        button.style.cursor = 'pointer';
        button.style.display = 'block';
    }

}

fromDdown.addEventListener("change", onCurrencySelect);
toDdown.addEventListener("change", onCurrencySelect);

// Button & Input disabling/enabling function End's____________________________________

if (userInput.hasAttribute('disabled')) {
    userInput.style.cursor = 'not-allowed';
    userInput.style.display = 'none';
}

if (button.hasAttribute('disabled')) {
    button.style.cursor = 'not-allowed';
    // button.style.display = 'none';

}

// Enter key support function Start's________________________________________________

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !button.hasAttribute('disabled')) {
        convertCurrency()
    }
    else {
        console.log(`Button is disabled`);

    }
});

// Enter key support function End's________________________________________________

;

console.log(fromDdown[112].value);
;