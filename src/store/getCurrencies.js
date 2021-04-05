const baseUrl = 'https://pi-converter-api.herokuapp.com/';
const path = 'api/currencies/';
const url = `${baseUrl}${path}`;

const staticsAssets = [
  { name: 'Dólar estadounidense', value: 1, pair: 'USD' },
  { name: 'Peso libre', value: 1, pair: 'USD' }
];

export const getCurrencies = async () => {
  const getPi = await fetch(`${url}pi`);
  const pi = await getPi.json();

  const getBtc = await fetch(`${url}btc`);
  const btc = await getBtc.json();

  const getVes = await fetch(`${url}ves`);
  const ves = await getVes.json();

  const dynamicAssets = await [pi, btc, ves];

  const _currencies = await [...dynamicAssets, ...staticsAssets];

  return _currencies;
};
