import data, { addData } from './data';

// getting & spread currencies
const [btc, ves, usd, pel, pi] = $data.currencies;

// Pi to any
const fromPi = (from, to) => {
  switch (to.name) {
    case 'Bitcoin':
      // btc = pi.value * amout;
      break;
    case 'Bolívar':
      // ves = pi.value * btc.value * ves.value * amount;
      break;
    case 'Dólar estadounidense':
      to.amount = parseFloat(from.value * btc.value * from.amount).toFixed(2);
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
      console.log(to.amount);
      break;
    case 'Peso libre':
      // to.amount = from.value;
      break;
  }
};

export const converterCurrencies = (from, to) => {
  if (!from.amount) from.amount = 1;
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
