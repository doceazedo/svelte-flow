<script lang="ts">
  import { Handle } from '../handles';
  import type { Node, Position } from '$lib/types';

  export let node: Node = null,
    sourcePosition: Position = 'bottom';
</script>

<div class="svelte-flow-node">
  {node?.data?.label}
  <Handle type="source" bind:node position={sourcePosition} />
</div>

<style lang="sass">
  @import '../../_mixins'

  .svelte-flow-node
    @include node
</style>
