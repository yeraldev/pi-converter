<script>
  import FromSelect from './components/FromSelect.svelte';
  import ToSelect from './components/ToSelect.svelte';
  import { fromCurrency, toCurrency } from './store/data';
  import { getting } from './store/getCurrencies';
  import { onMount } from 'svelte';
  import { derived } from 'svelte/store';

  onMount(() => {
    getting();
  });

  const onSelect = () => {
    toCurrency.add(currency);
    console.log($toCurrency);
  };
</script>

<div>
  <div>
    <FromSelect />
  </div>
  <!-- <div>
    <button on:click={toSwitch}> switch </button>
  </div> -->
  <div>
    <ToSelect on:toSelect={onSelect} />
  </div>
</div>
