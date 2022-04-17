<script lang="ts">
  import { Handle } from '../handles';
  import type { NodeData, Position } from '$lib/types';

  export let data: NodeData = null,
    targetPosition: Position = 'top';
</script>

<div class="svelte-flow-node">
  {data?.label}
  <Handle type="target" position={targetPosition} />
</div>

<style lang="sass">
  @import '../../_mixins'

  .svelte-flow-node
    @include node
</style>
