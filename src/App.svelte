<script>
  import { getCurrencies } from './store/getCurrencies.js';
  import { spreadTo } from './store/converterTo.js';
  import { spreadFrom } from './store/converterFrom.js';
  import { currencies } from './store/data.js';
  import Footer from './components/footer/Footer.svelte';
  import Navbar from './components/header/Navbar.svelte';
  import ConverterCard from './components/body/ConverterCard.svelte';
  import InfoCard from './components/body/InfoCard1.svelte';
  import InfoCard2 from './components/body/InfoCard2.svelte';

  const loader = async () => {
    try {
      const data = await getCurrencies();
      await spreadFrom(data);
      await spreadTo(data);
      await currencies.add(data);

      return new Promise(resolve => resolve(data));
    } catch (error) {
      throw new Error(error);
    }
  };

  const loaded = loader();
</script>

<Navbar />
<main>
  {#await loaded}
    <p>Cargando...</p>
  {:then data}
    <InfoCard />
    <ConverterCard />
    <InfoCard2 />
  {:catch error}
    <button
      on:click={() => {
        location.reload();
      }}>Ocurrió un error</button
    >
  {/await}
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
