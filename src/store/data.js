import { derived, writable } from 'svelte/store';

// Currencies

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
    set({ ...data, amount: parseFloat(amount) });
  };

  return { subscribe, add };
};

export const fromCurrency = setCurrency();

export const toCurrency = setCurrency();

// Set Amount

export const setAmount = derived(fromCurrency, ($fromCurrency, set) => {
  set({ ...$fromCurrency, amount: data });
});
