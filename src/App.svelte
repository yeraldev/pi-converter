<script>
  import { spreadTo } from './store/converterTo.js';
  import { spreadFrom } from './store/converterFrom.js';
  import { currencies } from './store/data.js';
  import { getCurrencies } from './store/getCurrencies.js';
  import Footer from './components/footer/Footer.svelte';
  import Navbar from './components/header/Navbar.svelte';
  import ConverterCard from './components/body/ConverterCard.svelte';
  import InfoCard from './components/body/InfoCard1.svelte';
  import InfoCard2 from './components/body/InfoCard2.svelte';
  import { onMount } from 'svelte';

  let load = true;

  onMount(async () => {
    const res = await getCurrencies();
    console.log(res);
    await spreadFrom(res);
    await spreadTo(res);
    await currencies.add(res);
    // console.log($currencies);
    load = $currencies && $currencies.length ? true : false;
  });
</script>

<Navbar />
<main>
  {#if load}
    <div class="content">
      <InfoCard />
      <ConverterCard />
      <InfoCard2 />
    </div>
  {/if}
</main>
<Footer />

<style>
  main {
    display: block;
    text-align: center;
    align-items: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  :global(input) {
    text-align: right;
  }
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
