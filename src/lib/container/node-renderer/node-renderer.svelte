<script lang="ts">
  import { getFlowContexts } from '$lib/contexts';
  import { NodeWrapper } from '$lib/components/nodes';

  const { nodes, nodeTypes } = getFlowContexts();
</script>

{#each $nodes as node}
  <NodeWrapper
    bind:element={node.element}
    bind:handles={node.handles}
    bind:x={node.position.x}
    bind:y={node.position.y}
  >
    <svelte:component
      this={$nodeTypes[node.type] || $nodeTypes?.default}
      bind:node
      bind:targetPosition={node.targetPosition}
      bind:sourcePosition={node.sourcePosition}
    />
  </NodeWrapper>
{/each}
