<script lang="ts">
  export let hide = false;
</script>

{#if !hide}
  <a href="/" target="_blank" class="svelte-flow-attribution">Svelte Flow</a>
{/if}

<style lang="sass">
  .svelte-flow-attribution
    position: absolute
    bottom: 0
    right: 0
    padding: .25rem
    font-size: 10px
    text-decoration: none
    color: #555
    background-color: rgba(#fff, .25)
</style>
