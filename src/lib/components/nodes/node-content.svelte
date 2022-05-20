<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  let className = '';
  export { className as class };
  export let label: string | typeof SvelteComponent = null;
</script>

<div class="svelte-flow-node {className || ''}">
  {#if typeof label === 'string'}
    {label}
  {:else if label != null}
    <svelte:component this={label} />
  {/if}

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
