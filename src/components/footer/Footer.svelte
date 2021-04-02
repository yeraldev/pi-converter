<script>
  import CopyRight from './CopyRight.svelte';
  import Instagram from './Instagram.svelte';
  import Telegram from './Telegram.svelte';
  import Twitter from './Twitter.svelte';
  import YouTube from './YouTube.svelte';
  import Github from './Github.svelte';
</script>

<footer>
  <div class="footer---author">
    <div class="footer--copyright">
      <CopyRight />
    </div>
    <div class="footer---author--id">2021 | yeraldev</div>
  </div>
  <div class="footer--rrss">
    <div class="footer--rrss--item">
      <Instagram />
    </div>
    <div class="footer--rrss--item">
      <Twitter />
    </div>
    <div class="footer--rrss--item">
      <Telegram />
    </div>
    <div class="footer--rrss--item">
      <YouTube />
    </div>
    <div class="footer--rrss--item">
      <Github />
    </div>
  </div>
</footer>

<style>
  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 0.5em 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #001d47;
    color: #fff;
  }
  .footer---author {
    display: flex;
    vertical-align: center;
  }
  .footer--copyright {
    width: 1em;
    margin-top: 0.2em;
    /* color: #fff; */
  }
  .footer---author--id {
    font-size: 1em;
    font-weight: 600;
    padding-left: 0.25em;
  }
  .footer--rrss {
    display: flex;
  }
  .footer--rrss--item {
    padding: 0.5em;
    width: 2em;
    height: 2em;
  }
</style>
