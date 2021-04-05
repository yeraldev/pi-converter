<script>
  import Disclaimer from '../modal/Disclaimer.svelte';
  import LinksModal from '../modal/linksModal.svelte';

  let toLocaleDate = '';

  const getDate = () => {
    setInterval(() => {
      const newDate = new Date(Date.now());
      toLocaleDate = newDate.toLocaleString();
    }, 1000);
  };

  getDate();
</script>

<div class="info2--container">
  <div class="info2--element">{toLocaleDate}</div>
  <div class="info2--element">
    <Disclaimer />
  </div>
  <div class="info2--element">
    <LinksModal />
  </div>
</div>

<style>
  div {
    padding-top: 0.5em;
  }
</style>
