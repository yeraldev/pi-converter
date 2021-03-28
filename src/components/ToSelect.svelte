<script>
  import { converterCurrencies } from './../store/converterCurrencies.js';
  import {
    currencies,
    toCurrency,
    toAmount,
    fromCurrency
  } from '../store/data';
  import { beforeUpdate } from 'svelte';
  import ToInput from './ToInput.svelte';

  let currency = {};

  const onSelect = () => {
    toCurrency.add(currency);
    converterCurrencies($toCurrency, $fromCurrency);
  };

  // beforeUpdate(() => {
  //   toCurrency.add(currency, $toAmount);
  //   toAmount.add($toAmount);

  //   console.log($toCurrency);
  //   console.log($toAmount);
  // });
</script>

<select
  on:click={onSelect}
  bind:value={currency}
  name="toCurrency"
  id="toCurrency"
>
  {#each $currencies as currency}
    <option value={currency}>{currency.name}</option>
  {/each}
</select>

<ToInput />
