<script lang="ts">
  export let hide = false;
</script>

{#if !hide}
  <a href="/" class="svelte-flow-attribution">Svelte Flow</a>
{/if}

<style lang="sass">
  .svelte-flow-attribution
    position: absolute
    bottom: 0
    right: 0
    padding: .25rem
    background-color: rgba(#fff, .25)
</style>
