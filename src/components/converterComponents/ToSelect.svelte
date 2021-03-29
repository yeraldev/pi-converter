<script>
  import { converterFrom } from '../../store/converterFrom.js';
  import {
    currencies,
    toCurrency,
    toAmount,
    fromCurrency,
    fromAmount
  } from '../../store/data';
  import ToInput from './ToInput.svelte';

  let currency = {};

  const onSelect = () => {
    fromCurrency.add($fromCurrency, $fromAmount);
    toCurrency.add(currency, $toAmount);
    converterFrom($fromCurrency, $toCurrency);
  };
</script>

<select
  on:click={onSelect}
  bind:value={currency}
  name="toCurrency"
  id="toCurrency"
>
  <option>Select</option>
  {#each $currencies as currency}
    <option value={currency}>{currency.name}</option>
  {/each}
</select>

<ToInput />
