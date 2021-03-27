<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let currencies, name, value;
</script>

<select
  on:click={() => {
    dispatch('onSelect');
  }}
  {name}
  id={name}
  bind:value
>
  {#each currencies as currency}
    <option value={currency}>{currency.name}</option>
  {/each}
</select>
