import { getCurrencies } from './getCurrencies';
import { toAmount } from './data';

// getting & spread currencies
let btc, ves, usd, pel, pi;

const spread = (() => {
  [btc, ves, usd, pel, pi] = getCurrencies;
})();

// Pi to any
const fromPi = (from, to) => {
  switch (to.name) {
    case 'Bitcoin':
      // btc = pi.value * amout;
      break;
    case 'Bolívar':
      // toAmount.add(
      //   parseFloat(pi.value * btc.value * ves.value * from.amount).toFixed(2)
      // );
      break;
    case 'Dólar estadounidense':
      toAmount.add(parseFloat(from.value * btc.value * from.amount).toFixed(2));
      break;
    case 'Peso libre':
      // to.amount = from.value;
      break;
  }
};

// USD to any
const fromUsd = (from, to) => {
  switch (to.name) {
    case 'Bitcoin':
      // btc = pi.value * amout;
      break;
    case 'Bolívar':
      // ves = pi.value * btc.value * ves.value * amount;
      break;
    case 'Pi':
      // toAmount.add();
      break;
    case 'Peso libre':
      // to.amount = from.value;
      break;
  }
};

export const converterCurrencies = (from, to) => {
  console.log(from);
  switch (from.name) {
    case 'Pi':
      fromPi(from, to);
      break;
    case 'Bitcoin':
      console.log('btc');
      break;
    case 'Peso libre':
      console.log('pel');
    case 'Dólar estadounidense':
      fromUsd(from, to);
      break;
    case 'ves':
      console.log('ves');
      break;
  }
};
