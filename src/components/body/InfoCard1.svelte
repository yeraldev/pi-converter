<script>
  import { fromCurrency, toAmountInfo, toCurrency } from '../../store/data.js';
</script>

<div class="info1--container">
  <div class="info1--fromCurrency">
    1 {$fromCurrency.name}
  </div>
  <div class="info1--equal">es igual a</div>
  <div class="info1--toCurrency">
    {$toAmountInfo}
    {$toCurrency.name}
  </div>
</div>

<style>
  .info1--container {
    padding-top: 0.75em;
  }
  .info1--fromCurrency {
    font-size: 1.25em;
    font-weight: 250;
  }
  .info1--equal {
    font-size: 0.8em;
  }
  .info1--toCurrency {
    font-size: 1.5em;
    font-weight: 500;
  }
</style>
