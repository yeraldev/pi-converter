import { writable } from 'svelte/store';

export default data;

const data = writable({
  currencies: Object.freeze([]),
  fromCurrency: Object.freeze({}),
  toCurrency: Object.freeze({})
});

export const addData = newData => {
  return {
    currencies: () =>
      update(
        $data =>
          ($data.currencies = Object.freeze([...$data.currencies, newData]))
      ),
    from: () =>
      update($data => ($data.fromCurrency = Object.freeze({ newData }))),
    to: () => update($data => ($data.toCurrency = Object.freeze({ newData })))
  };
};
