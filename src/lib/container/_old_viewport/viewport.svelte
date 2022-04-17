<div class="svelte-flow-viewport">
  <slot />
</div>

<style lang="sass">
  .svelte-flow-viewport
    position: relative
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
    background: radial-gradient(#cbcbcb 1px, #fff 1px) // #6f6c66, #121212
    background-size: 1.5rem 1.5rem
</style>
