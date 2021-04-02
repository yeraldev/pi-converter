<script>
  export let href, src, alt;
</script>

<button
  ><a {href} target="_blank" rel="noopener noreferrer"><img {src} {alt} /></a
  ></button
>

<style>
  button {
    width: auto;
    height: 5.5em;
    border-radius: 0.5em;
    background: #0c3e83;
    border: black 0.2rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>
