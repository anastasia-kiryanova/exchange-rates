'use strict';

function updateExchangeRates(update) {
    const date = document.getElementById('date');
    date.textContent = update.date;

    const usdBuy = document.getElementById('usd-buy-rate');
    usdBuy.textContent = update.usd.buyRate;

    const usdSell = document.getElementById('usd-sell-rate');
    usdSell.textContent = update.usd.sellRate;

    const eurBuy = document.getElementById('eur-buy-rate');
    eurBuy.textContent = update.eur.buyRate;

    const eurSell = document.getElementById('eur-sell-rate');
    eurSell.textContent = update.eur.sellRate;
}
