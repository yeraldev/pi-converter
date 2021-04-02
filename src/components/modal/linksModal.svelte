<script>
  import Buttons from './Buttons.svelte';
  import BaseModal from './BaseModal.svelte';

  let showLinks = false;

  const links = [
    {
      alt: 'Bolsa Descentralizada de Valores de Venezuela',
      href: 'https://bdve.io/ ',
      src: 'https://bdve.io/assets/img/logo-positive.png'
    },
    {
      alt: 'PiMarkets',
      href: 'https://pimarkets.io',
      src: 'https://www.pimarkets.io/assets/img/logo-positive.png'
    },

    {
      alt: 'Android App',
      href: 'https://play.google.com/store/apps/details?id=io.pimarkets.app ',
      src: 'https://www.bdve.io/assets/img/button-playstore-v2.svg'
    },
    {
      alt: 'Desktop App',
      href: 'https://desktop.pimarkets.io/',
      src: 'https://www.bdve.io/assets/img/desktop-icon.png'
    }
  ];
</script>

<div>
  <span
    class="text--links"
    on:click={() => {
      showLinks = true;
    }}
  >
    Enlaces de interes
  </span>
</div>

{#if showLinks}
  <BaseModal
    on:close={() => {
      showLinks = false;
    }}
  >
    <h5 slot="tittle">Enlaces de interes</h5>

    <div slot="body" class="content">
      {#each links as link}
        <Buttons href={link.href} src={link.src} alt={link.alt} />
      {/each}
    </div>
  </BaseModal>
{/if}

<style>
  span {
    text-decoration: underline;
    cursor: pointer;
  }
  span:hover {
    color: #001d47;
  }
  h5 {
    font-size: 1.25em;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
</style>
