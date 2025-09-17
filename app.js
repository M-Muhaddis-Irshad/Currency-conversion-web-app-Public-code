// Getting DropDowns Start's______________________________________________

// 1st Dropdown______________________________
const fromDdown = document.getElementById('from_dropdown');
// 2nd Dropdown______________________________
const toDdown = document.getElementById('to_dropdown');

// Getting DropDowns End's______________________________________________

const button = document.getElementsByTagName('button')[0];
const userInput = document.getElementById('input');

// Converted value Box_________________________________________________________
const convertedCrncyBox = document.getElementById('afterConvert');

// From & To containers
const fromValues = document.getElementById('fromValues');
const toValues = document.getElementById('toValues');

// From container values______________________
const fromCode = document.getElementById('fromCode');
const fromAmount = document.getElementById('fromAmount');

// To container values
const toCode = document.getElementById('toCode');
const toAmount = document.getElementById('toAmount');

// Currency Conversion function___________________________________________________

async function convertCurrency() {

    let amount = 1;

    if (userInput.value.trim() !== "") {
        amount = userInput.value;
    }
    else {
        amount = 1;
    }

    try {
        const currencyApi = await fetch(`https://v6.exchangerate-api.com/v6//pair/${fromDdown.value}/${toDdown.value}/${amount}`);

        // console.log(currencyApi);

        const response = await currencyApi.json();
        // console.log(response);

        const { conversion_rate, conversion_result, target_code, base_code } = response;
        //         console.log(`
        // From: ${base_code} To: ${target_code} 
        // Converted rate: ${conversion_result}(${target_code}) 
        //         `);

        // Main container of converted values
        convertedCrncyBox.classList.add('active');

        // Containers_________________________
        fromValues.classList.add('active');
        toValues.classList.add('active');

        // Values________________________
        fromCode.innerText = `${base_code} :`;
        fromAmount.innerText = amount;
        toCode.innerText = `${target_code} :`;
        toAmount.innerText = conversion_result;

        // Empty Input Field_____________________
        userInput.value = "";

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
        userInput.classList.add('active');
    }
    if (crncy1 !== "0" && crncy2 !== "0") {
        button.removeAttribute('disabled');
        button.style.cursor = 'pointer';
        button.classList.add('active');
    }

}

fromDdown.addEventListener("change", onCurrencySelect);
toDdown.addEventListener("change", onCurrencySelect);

// Button & Input disabling/enabling function End's____________________________________

if (userInput.hasAttribute('disabled')) {
    userInput.style.cursor = 'not-allowed';
    userInput.classList.remove('active');
}

if (button.hasAttribute('disabled')) {
    button.style.cursor = 'not-allowed';
    button.classList.remove('active');

}

// Enter key support function Start's________________________________________________

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !button.hasAttribute('disabled')) convertCurrency()
});

// Enter key support function End's________________________________________________

;

// console.log(fromDdown[112].value);
;