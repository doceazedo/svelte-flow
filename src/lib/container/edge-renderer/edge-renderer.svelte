<script lang="ts">
  import { getFlowContexts } from '$lib/contexts';
  import type { Edge, EdgePosition, Node } from '$lib/types';

  const { edges, edgeTypes, nodes } = getFlowContexts();

  const getEdgePositions = (nodes: Node[], edge: Edge): EdgePosition => {
    const offset = 12; // ???

    const sourceNode = nodes.find((node) => edge.source == node.id);
    const targetNode = nodes.find((node) => edge.target == node.id);
    if (!sourceNode?.element || !targetNode?.element) return;

    const sourceHandle = sourceNode.handles.find((handle) =>
      edge.sourceHandle
        ? edge.sourceHandle == handle.id
        : handle.type == 'source',
    );
    const targetHandle = targetNode.handles.find((handle) =>
      edge.targetHandle
        ? edge.targetHandle == handle.id
        : handle.type == 'target',
    );
    if (!sourceHandle?.element || !targetHandle?.element) return;

    const sourceHandleRect = sourceHandle.element.getBoundingClientRect();
    const targetHandleRect = targetHandle.element.getBoundingClientRect();

    return {
      sourcePos: sourceHandle.position,
      sourceX: sourceHandleRect.x - offset,
      sourceY: sourceHandleRect.y - offset,
      targetPos: targetHandle.position,
      targetX: targetHandleRect.x - offset,
      targetY: targetHandleRect.y - offset,
    };
  };
</script>

<svg class="svelte-flow-edge-renderer">
  {#each $edges as edge}
    {@const pos = edge?.position || getEdgePositions($nodes, edge)}
    <svelte:component
      this={$edgeTypes[edge.type] || $edgeTypes?.default}
      sourcePosition={pos?.sourcePos}
      targetPosition={pos?.targetPos}
      sourceX={pos?.sourceX}
      sourceY={pos?.sourceY}
      targetX={pos?.targetX}
      targetY={pos?.targetY}
      label={edge?.label}
    />
  {/each}
</svg>

<style lang="sass">
  .svelte-flow-edge-renderer
    width: 100%
    height: 100%
</style>
