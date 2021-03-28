import { onMount } from 'svelte';
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
  { name: 'Bitcoin', pair: 'USD', value: '54603.70' },
  { name: 'Bolívar', pair: 'USD', value: '1827910.57' },
  { name: 'Dólar estadounidense', pair: 'PEL', value: 1 },
  { name: 'Peso libre', pair: 'USD', value: 1 },
  { name: 'Pi', pair: 'BTC', value: '0.00013282' }
];

export const getting = () => {
  currencies.add(getCurrencies);
};
