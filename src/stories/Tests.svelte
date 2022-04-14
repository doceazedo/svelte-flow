<script lang="ts">
  import { SvelteFlow } from '$lib';
  import { nodes } from './initial-data';
</script>

<div class="container">
  <SvelteFlow {nodes} />
</div>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;700&display=swap')

  .container
    width: 880px
    height: 495px
    border: 1px solid #cbcbcb
    border-radius: .25rem
    overflow: hidden
    font-size: .75rem
    font-family: 'JetBrains Mono', monospace
    text-transform: uppercase
</style>