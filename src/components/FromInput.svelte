<script>
  import { fromCurrency, setAmount } from './../store/data.js';

  const addAmount = e => {
    const amount = e.currentTarget.value;
    fromCurrency.add($fromCurrency, amount);
    console.log($fromCurrency);
  };
</script>

<input
  on:input={addAmount}
  value={$fromCurrency.value}
  id="fromInput"
  type="number"
/>

<style>
  :global(input[type='number'])::-webkit-inner-spin-button,
  :global(input[type='number'])::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :global(input[type='number']) {
    -moz-appearance: textfield;
  }
</style>
