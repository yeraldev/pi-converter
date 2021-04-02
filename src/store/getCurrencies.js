import { currencies } from './data';

const url = `http://localhost:3000/api/currencies`;

export const getCurrencies = async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return new Promise(resolve => resolve(data));
  } catch (e) {
    throw e;
  }
};
