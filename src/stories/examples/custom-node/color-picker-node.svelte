<script lang="ts">
  import { Handle } from '$lib/components/handles';
  import type { Node } from '$lib/types';

  export let node: Node = null;

  let value = '#ff4785';
</script>

<div class="svelte-flow-node">
  Color: {value}
  <input type="color" bind:value />

  <Handle type="target" bind:node position="left" />
  <Handle type="source" bind:node position="right" id="a" />
  <Handle type="source" bind:node position="right" id="b" />
</div>

<style lang="sass">
  @import '../../../../src/lib/_mixins' // 🤢

  .svelte-flow-node
    @include node
    display: flex
    flex-direction: column
    align-items: center
    gap: .5rem

    input
      border-color: #cbcbcb
      border-radius: .25rem
</style>
