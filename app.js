async function conversion() {

    try {
        // const currencyApi = await fetch('https://v6.exchangerate-api.com/v6/dca197b6c0906c69b50495d2/pair/USD/PKR');
        const currencyApi = await fetch('https://v6.exchangerate-api.com/v6/dca197b6c0906c69b50495d2/pair/USD/PKR/2');
        // console.log(currencyApi);

        const response = await currencyApi.json();
        console.log(response);

        const { conversion_rate,conversion_result, target_code, base_code } = response;
        console.log(`
From: ${base_code} To: ${target_code} 
Converted rate: ${conversion_result}(${target_code}) 
            `);

    } catch (error) {
        console.error('Not fetched');

    }

}

conversion()

// 1st Dropdown______________________________
const from_Ddown = document.getElementById('from_dropdown');
// 2nd Dropdown______________________________
const to_Ddown = document.getElementById('to_dropdown');

const from_1stVal = document.getElementById('fromVal1')
const to_1stVal = document.getElementById('toVal1')

if (from_Ddown.value !== 0 || to_Ddown.value !== 0) {
    from_1stVal.style.display = 'none';
    to_1stVal.style.display = 'none';
}