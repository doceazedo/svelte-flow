<script lang="ts">
  import { NodeContent } from '.';
  import { Handle } from '../handles';
  import type { Node, Position } from '$lib/types';

  export let node: Node = null,
    targetPosition: Position = 'top';
</script>

<NodeContent class={node?.className} label={node?.data?.label}>
  <Handle type="target" bind:node position={targetPosition} />
</NodeContent>
