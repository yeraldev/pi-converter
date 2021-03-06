import { writable } from 'svelte/store';

// Currencies
export default currencies;
const setCurrencies = () => {
  const { subscribe, set } = writable([]);

  const add = data => {
    set([...data]);
  };

  return { subscribe, add };
};

export const currencies = setCurrencies();

// Set Currency
const setCurrency = () => {
  const { subscribe, set } = writable({});

  const add = (data, amount) => {
    set({
      name: data.name,
      value: parseFloat(data.value),
      pair: data.pair,
      amount: parseFloat(amount)
    });
  };

  return { subscribe, add };
};

export const fromCurrency = setCurrency();

export const toCurrency = setCurrency();

// Set Amount
const setAmount = () => {
  const { subscribe, set } = writable('');

  const add = data => {
    set(data);
  };

  return { subscribe, add };
};

export const fromAmount = setAmount();

export const toAmount = setAmount();

export const toAmountInfo = setAmount();
