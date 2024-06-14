const axios = require('axios').default;

async function convertCurrency() {
    try {
        const brl = document.getElementById('brl').value || 0;
        const usd = document.getElementById('usd').value || 0;
        const eur = document.getElementById('eur').value || 0;
        const response = await axios.get('https://v6.exchangerate-api.com/v6/TOKEN_AQUI/latest/BRL');
        
        const rates = response.data.conversion_rates;

        const brlRate = rates.BRL || 1; 
        const usdRate = rates.USD || 0;
        const eurRate = rates.EUR || 0;

        const brlToUsd = (brl / brlRate) * usdRate;
        const brlToEur = (brl / brlRate) * eurRate;
        const usdToBrl = (usd / usdRate) * brlRate;
        const eurToBrl = (eur / eurRate) * brlRate;

        document.getElementById('usd').value = usdToBrl.toFixed(2);
        document.getElementById('eur').value = eurToBrl.toFixed(2);
        document.getElementById('brl').value = brl.toFixed(2);

    } catch (error) {
        console.error('Erro ao converter moeda:', error.message);
    }
}
