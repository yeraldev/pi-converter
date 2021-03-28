<script>
  import { toCurrency, toAmount } from '../store/data';

  const addAmount = e => {
    const amount = e.currentTarget.value;

    toCurrency.add($toCurrency, amount);
    toAmount.add(amount);

    console.log($toCurrency);
    console.log($toAmount);
  };
</script>

<input on:input={addAmount} value={$toAmount} id="toInput" type="number" />
