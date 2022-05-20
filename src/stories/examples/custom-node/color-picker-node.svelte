<script lang="ts">
  import { NodeContent } from '$lib/components/nodes';
  import { Handle } from '$lib/components/handles';
  import type { Node } from '$lib/types';

  export let node: Node = null;

  let value = '#ff4785';
</script>

<NodeContent class="color-picker-node {node?.className || ''}">
  Color: {value}
  <input type="color" bind:value />

  <Handle type="target" bind:node position="left" />
  <Handle type="source" bind:node position="right" id="a" />
  <Handle type="source" bind:node position="right" id="b" />
</NodeContent>

<style lang="sass">
  :global(.color-picker-node)
    display: flex
    flex-direction: column
    align-items: center
    gap: .5rem

    input
      border-color: #cbcbcb
      border-radius: .25rem
</style>
