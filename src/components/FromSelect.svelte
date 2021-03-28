<script>
  import { converterFrom } from '../store/converterFrom.js';
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
    // converterFrom($fromCurrency, $toCurrency);
  };

  // beforeUpdate(() => {
  //   fromCurrency.add(currency, $fromAmount);
  //   fromAmount.add($fromAmount);
  // });
</script>

<select
  on:click={onSelect}
  bind:value={currency}
  name="fromSelect"
  id="fromSelect"
>
  <option>Select</option>
  {#each $currencies as currency}
    <option value={currency}>{currency.name}</option>
  {/each}
</select>

<FromInput />
