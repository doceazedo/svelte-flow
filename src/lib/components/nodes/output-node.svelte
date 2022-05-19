<script lang="ts">
  import { Handle } from '../handles';
  import type { Node, Position } from '$lib/types';

  export let node: Node = null,
    targetPosition: Position = 'top';
</script>

<div class="svelte-flow-node">
  {node?.data?.label}
  <Handle type="target" bind:node position={targetPosition} />
</div>

<style lang="sass">
  @import '../../_mixins'

  .svelte-flow-node
    @include node
</style>
