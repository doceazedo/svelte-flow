<script lang="ts">
  import { Handle } from '../handles';
  import type { NodeData, Position } from '$lib/types';

  export let data: NodeData = null,
    sourcePosition: Position = 'bottom';
</script>

<div class="svelte-flow-node">
  {data?.label}
  <Handle type="source" position={sourcePosition} />
</div>

<style lang="sass">
  @import '../../_mixins'

  .svelte-flow-node
    @include node
</style>
