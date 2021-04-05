<script>
  import { converterFrom } from '../../store/converterFrom.js';
  import { converterTo } from '../../store/converterTo.js';
  import {
    currencies,
    toCurrency,
    toAmount,
    fromCurrency,
    fromAmount
  } from '../../store/data.js';
  import { onMount } from 'svelte';

  let currency = {};

  onMount(() => {
    currency = $currencies[3];
  });

  const onSelect = () => {
    fromCurrency.add($fromCurrency, $fromAmount);
    toCurrency.add(currency, $toAmount);
    converterFrom($fromCurrency, $toCurrency);
  };

  const addAmount = e => {
    const amount = e.currentTarget.value;

    toCurrency.add($toCurrency, amount);
    toAmount.add(amount);

    converterTo($toCurrency, $fromCurrency);
  };
</script>

<div>
  <select
    on:click={onSelect}
    on:blur={onSelect}
    bind:value={currency}
    name="toCurrency"
    id="toCurrency"
  >
    {#each $currencies as currency}
      <option value={currency}>{currency.name}</option>
    {/each}
  </select>

  <input on:input={addAmount} value={$toAmount} id="toInput" type="number" />
</div>
