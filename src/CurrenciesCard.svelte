<script>
  import FromSelect from './components/FromSelect.svelte';
  import ToSelect from './components/ToSelect.svelte';
  import { getting } from './store/getCurrencies';
  import { onMount } from 'svelte';

  onMount(() => {
    getting();
  });
</script>

<div>
  <div>
    <FromSelect />
  </div>
  <!-- <div>
    <button on:click={toSwitch}> switch </button>
  </div> -->
  <div>
    <ToSelect />
  </div>
</div>
