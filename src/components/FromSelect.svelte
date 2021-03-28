<script>
  import { converterCurrencies } from './../store/converterCurrencies.js';
  import { beforeUpdate } from 'svelte';
  import {
    currencies,
    fromCurrency,
    fromAmount,
    toCurrency
  } from './../store/data.js';
  import FromInput from './FromInput.svelte';

  let currency = {};

  const onSelect = async () => {
    fromCurrency.add(currency, $fromAmount);
    converterCurrencies($fromCurrency, $toCurrency);
  };

  // beforeUpdate(() => {
  //   fromCurrency.add(currency, $fromAmount);
  //   fromAmount.add($fromAmount);

  //   console.log($fromCurrency);
  //   console.log($fromAmount);
  // });
</script>

<select
  on:click={onSelect}
  bind:value={currency}
  name="fromSelect"
  id="fromSelect"
>
  {#each $currencies as currency}
    <option value={currency}>{currency.name}</option>
  {/each}
</select>

<FromInput />
