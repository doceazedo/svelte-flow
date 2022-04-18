<script lang="ts">
  // TODO: zoom/pan
  // TODO: user selection
</script>

<div class="svelte-flow-renderer">
  <slot />
</div>

<style lang="sass">
  .svelte-flow-renderer
    position: relative
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
    overflow: hidden
    background: radial-gradient(#cbcbcb 1px, #fff 1px)
    background-size: 1.5rem 1.5rem
</style>
