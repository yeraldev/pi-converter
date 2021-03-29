<script>
  import { converterFrom } from '../../store/converterFrom.js';
  import { fromCurrency, fromAmount, toCurrency } from '../../store/data.js';

  const addAmount = e => {
    const amount = e.currentTarget.value;

    fromCurrency.add($fromCurrency, amount);
    fromAmount.add(amount);

    converterFrom($fromCurrency, $toCurrency);
  };
</script>

<input on:input={addAmount} value={$fromAmount} id="fromInput" type="number" />
