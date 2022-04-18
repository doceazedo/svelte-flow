<script lang="ts">
  import { getFlowContexts } from '$lib/contexts';
  import { NodeWrapper } from '$lib/components/nodes';

  const { nodes, nodeTypes } = getFlowContexts();
</script>

{#each $nodes as node}
  <NodeWrapper
    bind:x={node.position.x}
    bind:y={node.position.y}
    bind:rect={node.rect}
  >
    <svelte:component
      this={$nodeTypes[node.type] || $nodeTypes?.default}
      data={node?.data}
      bind:targetPosition={node.targetPosition}
      bind:sourcePosition={node.sourcePosition}
    />
  </NodeWrapper>
{/each}
