<script lang="ts">
  import { Viewport } from '.';
</script>

<div class="svelte-flow-wrapper">
  <Viewport>
    <slot />
  </Viewport>
</div>

<style lang="sass">
  .svelte-flow-wrapper
    width: 100%
    height: 100%
    overflow: hidden
</style>
