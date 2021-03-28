<script>
  import { currencies, fromCurrency } from '../store/data';
  import FromInput from './FromInput.svelte';

  let currency = {};

  const onSelect = () => {
    fromCurrency.add(currency);
    console.log($fromCurrency);
  };
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
