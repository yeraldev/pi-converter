<script>
  import CurrenciesCard from './CurrenciesCard.svelte';
</script>

<main>
  <CurrenciesCard />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  /* h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  } */

  :global(input[type='number'])::-webkit-inner-spin-button,
  :global(input[type='number'])::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :global(input[type='number']) {
    -moz-appearance: textfield;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
