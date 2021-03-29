<script>
  import FromSelect from './components/converterComponents/FromSelect.svelte';
  import ToSelect from './components/converterComponents/ToSelect.svelte';
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
  <div>
    <ToSelect />
  </div>
</div>
