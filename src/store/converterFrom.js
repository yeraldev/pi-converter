import { getCurrencies } from './getCurrencies';
import { toAmount } from './data';

// getting & spread currencies
let pi, btc, ves, usd, pel;

const spread = (() => {
  [pi, btc, ves, usd, pel] = getCurrencies;
})();

// From Pi
const fromPi = (from, to) => {
  switch (to.name) {
    case 'Bitcoin':
      toAmount.add(parseFloat(pi.value * from.amount).toFixed(8));
      break;
    case 'Bolívar':
      toAmount.add(
        parseFloat(pi.value * btc.value * ves.value * from.amount).toFixed(2)
      );
      break;
    case 'Dólar estadounidense':
      toAmount.add(parseFloat(pi.value * btc.value * from.amount).toFixed(2));
      break;
    case 'Peso libre':
      toAmount.add(parseFloat(pi.value * btc.value * from.amount).toFixed(2));
      break;
  }
};

// From USD
const fromUsd = (from, to) => {
  switch (to.name) {
    case 'Pi':
      toAmount.add(parseFloat(from.amount / btc.value / pi.value).toFixed(2));
      break;
    case 'Bitcoin':
      toAmount.add(parseFloat(from.amount / btc.value).toFixed(8));
      break;
    case 'Bolívar':
      toAmount.add(parseFloat(from.amount * ves.value).toFixed(2));
      break;
    case 'Peso libre':
      toAmount.add(parseFloat(from.amount * pel.value).toFixed(2));
      break;
  }
};

// From BTC
const fromBtc = (from, to) => {
  switch (to.name) {
    case 'Pi':
      toAmount.add(parseFloat(from.amount / pi.value).toFixed(2));
      break;
    case 'Dólar estadounidense':
      toAmount.add(parseFloat(from.amount * btc.value).toFixed(2));
      break;
    case 'Bolívar':
      toAmount.add(parseFloat(from.amount * btc.value * ves.value).toFixed(2));
      break;
    case 'Peso libre':
      toAmount.add(parseFloat(from.amount * btc.value).toFixed(2));
      break;
  }
};

// From BTC
const fromVes = (from, to) => {
  switch (to.name) {
    case 'Pi':
      toAmount.add(
        parseFloat(from.amount / ves.value / btc.value / pi.value).toFixed(2)
      );
      break;
    case 'Dólar estadounidense':
      toAmount.add(parseFloat(from.amount / ves.value).toFixed(2));
      break;
    case 'Bitcoin':
      toAmount.add(parseFloat(from.amount / ves.value / btc.value).toFixed(2));
      break;
    case 'Peso libre':
      toAmount.add(parseFloat(from.amount / ves.value).toFixed(2));
      break;
  }
};

export const converterFrom = (from, to) => {
  console.log(from);
  switch (from.name) {
    case 'Pi':
      fromPi(from, to);
      break;
    case 'Bitcoin':
      fromBtc(from, to);
      break;
    case 'Peso libre':
      fromUsd(from, to);
    case 'Dólar estadounidense':
      fromUsd(from, to);
      break;
    case 'Bolívar':
      fromVes(from, to);
      break;
  }
};