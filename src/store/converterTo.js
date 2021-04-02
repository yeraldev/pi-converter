import { fromAmount } from './data';

// getting & spread currencies
let pi, btc, ves, usd, pel;

export const spreadTo = data => {
  [pi, btc, ves, usd, pel] = data;
};

// From Pi
const fromPi = (from, to) => {
  switch (to.name) {
    case 'Bitcoin':
      fromAmount.add(parseFloat(pi.value * from.amount).toFixed(8));
      break;
    case 'Bolívar venezolano':
      fromAmount.add(
        parseFloat(pi.value * btc.value * ves.value * from.amount).toFixed(2)
      );
      break;
    case 'Dólar estadounidense':
      fromAmount.add(parseFloat(pi.value * btc.value * from.amount).toFixed(2));
      break;
    case 'Peso libre':
      fromAmount.add(parseFloat(pi.value * btc.value * from.amount).toFixed(2));
      break;
    default:
      fromAmount.add(parseFloat(from.amount));
      break;
  }
};

// From USD
const fromUsd = (from, to) => {
  switch (to.name) {
    case 'Pi':
      fromAmount.add(parseFloat(from.amount / btc.value / pi.value).toFixed(2));
      break;
    case 'Bitcoin':
      fromAmount.add(parseFloat(from.amount / btc.value).toFixed(8));
      break;
    case 'Bolívar venezolano':
      fromAmount.add(parseFloat(from.amount * ves.value).toFixed(2));
      break;
    case 'Peso libre':
      fromAmount.add(parseFloat(from.amount * pel.value).toFixed(2));
      break;
    default:
      fromAmount.add(parseFloat(from.amount));
      break;
  }
};

// From BTC
const fromBtc = (from, to) => {
  switch (to.name) {
    case 'Pi':
      fromAmount.add(parseFloat(from.amount / pi.value).toFixed(2));
      break;
    case 'Dólar estadounidense':
      fromAmount.add(parseFloat(from.amount * btc.value).toFixed(2));
      break;
    case 'Bolívar venezolano':
      fromAmount.add(
        parseFloat(from.amount * btc.value * ves.value).toFixed(2)
      );
      break;
    case 'Peso libre':
      fromAmount.add(parseFloat(from.amount * btc.value).toFixed(2));
      break;
    default:
      fromAmount.add(parseFloat(from.amount));
      break;
  }
};

// From BTC
const fromVes = (from, to) => {
  switch (to.name) {
    case 'Pi':
      fromAmount.add(
        parseFloat(from.amount / ves.value / btc.value / pi.value).toFixed(2)
      );
      break;
    case 'Dólar estadounidense':
      fromAmount.add(parseFloat(from.amount / ves.value).toFixed(2));
      break;
    case 'Bitcoin':
      fromAmount.add(
        parseFloat(from.amount / ves.value / btc.value).toFixed(2)
      );
      break;
    case 'Peso libre':
      fromAmount.add(parseFloat(from.amount / ves.value).toFixed(2));
      break;
    default:
      fromAmount.add(parseFloat(from.amount));
      break;
  }
};

export const converterTo = (from, to) => {
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
    case 'Bolívar venezolano':
      fromVes(from, to);
      break;
  }
};
