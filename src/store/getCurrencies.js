import { currencies } from './data';

const url = `http://localhost:2000/api/currencies`;

// export const getCurrencies = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.currencies;
//   } catch (e) {
//     throw e.message;
//   }
// };

export const getCurrencies = [
  { name: 'Pi', pair: 'BTC', value: '0.00013282' },
  { name: 'Bitcoin', pair: 'USD', value: '55005.0' },
  { name: 'Bolívar', pair: 'USD', value: '1890076.74' },
  { name: 'Dólar estadounidense', pair: 'PEL', value: 1 },
  { name: 'Peso libre', pair: 'USD', value: 1 }
];

export const getting = () => {
  currencies.add(getCurrencies);
};
