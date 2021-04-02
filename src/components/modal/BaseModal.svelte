<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<div class="modal--container">
  <div
    class="modal--background"
    on:click={() => {
      dispatch('close');
    }}
  />
  <div class="modal--content">
    <div class="modal--tittle">
      <slot name="tittle"><!-- optional fallback --></slot>
      <button
        on:click={() => {
          dispatch('close');
        }}
      >
        <span>&times;</span>
      </button>
    </div>
    <div class="modal--body">
      <slot name="body"><!-- optional fallback --></slot>
    </div>
  </div>
</div>

<style>
  .modal--container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .modal--background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal--content {
    position: absolute;
    width: calc(100vw - 4rem);
    max-width: 25em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    padding: 0.5em 1em;
    margin: 4em 0.75em;
    border-radius: 0.5em;
    background-color: white;
    box-shadow: 0 0 0.5rem;
  }
  .modal--tittle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4em;
  }
  button {
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    border: none;
  }
  span {
    height: 100%;
    width: 100%;
  }
</style>
