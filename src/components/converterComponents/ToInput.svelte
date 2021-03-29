<script>
  import { toCurrency, toAmount, fromCurrency } from '../../store/data';
  import { converterTo } from '../../store/converterTo.js';

  const addAmount = e => {
    const amount = e.currentTarget.value;

    toCurrency.add($toCurrency, amount);
    toAmount.add(amount);

    converterTo($toCurrency, $fromCurrency);

    console.log($toCurrency);
    console.log($toAmount);
  };
</script>

<input on:input={addAmount} value={$toAmount} id="toInput" type="number" />
