<script lang="ts">
  import { NodeContent } from '.';
  import { Handle } from '../handles';
  import type { Node, Position } from '$lib/types';

  export let node: Node = null,
    sourcePosition: Position = 'bottom';
</script>

<NodeContent class={node?.className}>
  {node?.data?.label}
  <Handle type="source" bind:node position={sourcePosition} />
</NodeContent>
