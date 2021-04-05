<script>
  import BaseModal from './BaseModal.svelte';

  let showDisclaimer = false;
</script>

<div>
  <span
    class="text--links"
    on:click={() => {
      showDisclaimer = true;
    }}
  >
    Renuncia de responsabilidad
  </span>
</div>

{#if showDisclaimer}
  <BaseModal
    on:close={() => {
      showDisclaimer = false;
    }}
  >
    <h5 slot="tittle">Exoneraciones de Responsabilidad</h5>

    <div slot="body" class="content">
      <p>
        Los datos y la información proporcionados no deben interpretarse como
        asesoramiento de inversiones general ni personalizado. Los productos u
        operaciones financieras a los que se refieren esos datos y esa
        información pueden no ser adecuados para tu perfil, tus objetivos o tus
        expectativas de inversión. Es tu responsabilidad determinar si cualquier
        producto u operación financiera es adecuada para tu caso, según tus
        intereses, objetivos de inversión, horizonte de inversión y propensión
        al riesgo. Este sitio web no se responsabiliza de los daños y perjuicios
        derivados de las operaciones o inversiones en productos financieros a
        las que se hace referencia. Además no recomienda el uso de los datos y
        la información proporcionados como única base para tomar cualquier
        decisión de inversión.
      </p>
      <p>
        Los datos que se proporcionan son obtenidos mediante consultas a la web
        y la Pichain (blockchian de Pi) y pueden ser constatados en:
        <a
          href="https://dex.piexchange.io/#/pi/swap"
          target="_blank"
          rel="noopener noreferrer">Pi</a
        >,
        <a
          href="https://www.google.com/search?q=btc+usd"
          target="_blank"
          rel="noopener noreferrer">Bitcoin</a
        >
        y
        <a
          href="http://www.bcv.org.ve/"
          target="_blank"
          rel="noopener noreferrer">Bolivar venezolano</a
        >.
      </p>
      <p>
        Este sitio web no puede garantizar la exactitud de los tipos de cambio
        que se muestran. Se recomienda que confirme los tipos actuales antes de
        realizar cualquier transacción que pueda verse afectada por variaciones
        en los tipos de cambio.
      </p>
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
    text-align: left;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 0.8em;
    text-align: justify;
  }
</style>
