<script>
  import { currencies } from './converterCurrencies';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let name = '',
    value = '',
    currency = {};
</script>

<select
  on:click={() => {
    dispatch('onSelect', { value: currency });
  }}
  {name}
  id={name}
  bind:value
>
  {#each currencies as currency}
    <option value={currency}>{currency.name}</option>
  {/each}
</select>
