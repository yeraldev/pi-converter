<script>
  import { currencies, toCurrency } from '../store/data';
  import { createEventDispatcher } from 'svelte';
  import ToInput from './ToInput.svelte';

  let currency = {};

  const onSelect = () => {
    toCurrency.add(currency);
  };
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
