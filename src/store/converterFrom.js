import { toAmount, toAmountInfo } from './data';

// getting & spread currencies
let pi, btc, ves, usd, pel;

export const spreadFrom = data => {
  [pi, btc, ves, usd, pel] = data;
};

// From Pi
const fromPi = (from, to) => {
  switch (to.name) {
    case 'Bitcoin':
      toAmount.add(parseFloat(pi.value * from.amount).toFixed(8));
      toAmountInfo.add(parseFloat(pi.value));
      break;
    case 'Bolívar venezolano':
      toAmount.add(
        parseFloat(pi.value * btc.value * ves.value * from.amount).toFixed(2)
      );
      toAmountInfo.add(parseFloat(pi.value * btc.value * ves.value).toFixed(2));
      break;
    case 'Dólar estadounidense':
      toAmount.add(parseFloat(pi.value * btc.value * from.amount).toFixed(2));
      toAmountInfo.add(parseFloat(pi.value * btc.value).toFixed(2));
      break;
    case 'Peso libre':
      toAmount.add(parseFloat(pi.value * btc.value * from.amount).toFixed(2));
      toAmountInfo.add(parseFloat(pi.value * btc.value).toFixed(2));
      break;
    default:
      toAmount.add(parseFloat(from.amount));
      toAmountInfo.add(1);
      break;
  }
};

// From USD
const fromUsd = (from, to) => {
  switch (to.name) {
    case 'Pi':
      toAmount.add(parseFloat(from.amount / btc.value / pi.value).toFixed(2));
      toAmountInfo.add(parseFloat(1 / btc.value / pi.value).toFixed(2));
      break;
    case 'Bitcoin':
      toAmount.add(parseFloat(from.amount / btc.value).toFixed(8));
      toAmountInfo.add(parseFloat(1 / btc.value).toFixed(8));
      break;
    case 'Bolívar venezolano':
      toAmount.add(parseFloat(from.amount * ves.value).toFixed(2));
      toAmountInfo.add(parseFloat(ves.value).toFixed(2));
      break;
    case 'Peso libre':
      toAmount.add(parseFloat(from.amount * pel.value).toFixed(2));
      toAmountInfo.add(1);
      break;
    default:
      toAmount.add(parseFloat(from.amount));
      toAmountInfo.add(1);
      break;
  }
};

// From BTC
const fromBtc = (from, to) => {
  switch (to.name) {
    case 'Pi':
      toAmount.add(parseFloat(from.amount / pi.value).toFixed(2));
      toAmountInfo.add(parseFloat(1 / pi.value).toFixed(2));
      break;
    case 'Dólar estadounidense':
      toAmount.add(parseFloat(from.amount * btc.value).toFixed(2));
      toAmountInfo.add(parseFloat(btc.value).toFixed(2));
      break;
    case 'Bolívar venezolano':
      toAmount.add(parseFloat(from.amount * btc.value * ves.value).toFixed(2));
      toAmountInfo.add(parseFloat(btc.value * ves.value).toFixed(2));
      break;
    case 'Peso libre':
      toAmount.add(parseFloat(from.amount * btc.value).toFixed(2));
      toAmountInfo.add(parseFloat(btc.value).toFixed(2));
      break;
    default:
      toAmount.add(parseFloat(from.amount));
      toAmountInfo.add(1);
      break;
  }
};

// From BTC
const fromVes = (from, to) => {
  switch (to.name) {
    case 'Pi':
      toAmount.add(
        parseFloat(from.amount / ves.value / btc.value / pi.value).toFixed(8)
      );
      toAmountInfo.add(
        parseFloat(1 / ves.value / btc.value / pi.value).toFixed(8)
      );
      break;
    case 'Dólar estadounidense':
      toAmount.add(parseFloat(from.amount / ves.value).toFixed(2));
      toAmountInfo.add(parseFloat(1 / ves.value).toFixed(6));
      break;
    case 'Bitcoin':
      toAmount.add(parseFloat(from.amount / ves.value / btc.value).toFixed(8));
      toAmountInfo.add(parseFloat(1 / ves.value / btc.value).toFixed(11));
      break;
    case 'Peso libre':
      toAmount.add(parseFloat(ves.value).toFixed(2));
      toAmountInfo.add(parseFloat(1 / ves.value).toFixed(6));
      break;
    default:
      toAmount.add(parseFloat(from.amount));
      toAmountInfo.add(1);
      break;
  }
};

export const converterFrom = (from, to) => {
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
