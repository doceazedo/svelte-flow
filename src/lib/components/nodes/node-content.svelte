<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div class="svelte-flow-node {className || ''}">
  <slot />
</div>

<style lang="sass">
  .svelte-flow-node
    padding: .75rem
    background-color: #fff
    box-shadow: rgba(#636363, .2) 0 2px 8px 0
    border: 1px solid #cbcbcb
    border-radius: .25rem
</style>
