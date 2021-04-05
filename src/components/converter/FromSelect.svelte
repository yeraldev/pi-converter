<script>
  import { converterFrom } from '../../store/converterFrom.js';
  import {
    currencies,
    fromCurrency,
    fromAmount,
    toCurrency
  } from '../../store/data.js';
  import { onMount } from 'svelte';

  let currency = {};

  onMount(async () => {
    currency = $currencies[0];

    fromAmount.add(1);
    fromCurrency.add(currency, $fromAmount);
    toCurrency.add($currencies[3]);

    converterFrom($fromCurrency, $toCurrency);
  });

  const onSelect = async () => {
    fromCurrency.add(currency, $fromAmount);
    converterFrom($fromCurrency, $toCurrency);
  };

  const addAmount = e => {
    const amount = e.currentTarget.value;

    fromCurrency.add($fromCurrency, amount);
    fromAmount.add(amount);

    converterFrom($fromCurrency, $toCurrency);
  };
</script>

<div>
  <select
    on:click={onSelect}
    on:blur={onSelect}
    bind:value={currency}
    name="fromSelect"
    id="fromSelect"
  >
    {#each $currencies as currency}
      <option value={currency}>{currency.name}</option>
    {/each}
  </select>

  <input
    on:input={addAmount}
    value={$fromAmount}
    id="fromInput"
    type="number"
  />
</div>
