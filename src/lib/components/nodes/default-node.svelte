<script lang="ts">
  import { NodeContent } from '.';
  import { Handle } from '$lib/components/handles';
  import type { Node, Position } from '$lib/types';

  export let node: Node = null,
    targetPosition: Position = 'top',
    sourcePosition: Position = 'bottom';
</script>

<NodeContent class={node?.className}>
  {node?.data?.label}
  <Handle type="target" bind:node position={targetPosition} />
  <Handle type="source" bind:node position={sourcePosition} />
</NodeContent>
