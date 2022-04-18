<script lang="ts">
  import { getFlowContexts } from '$lib/contexts';
  import type { Node, Position, XYPosition } from '$lib/types';

  const { edges, edgeTypes, nodes } = getFlowContexts();

  const getHandlePosition = (
    position: Position,
    nodeRect: DOMRect,
    handle?: any,
  ): XYPosition => {
    const x = (handle?.x || 0) + nodeRect.x;
    const y = (handle?.y || 0) + nodeRect.y;
    const width = handle?.width || nodeRect.width;
    const height = handle?.height || nodeRect.height;

    switch (position) {
      case 'top':
        return {
          x: x + width / 2,
          y,
        };
      case 'right':
        return {
          x: x + width,
          y: y + height / 2,
        };
      case 'bottom':
        return {
          x: x + width / 2,
          y: y + height,
        };
      case 'left':
        return {
          x,
          y: y + height / 2,
        };
    }
  };

  const getEdgePositions = (
    nodes: Node[],
    sourceId: string,
    targetId: string,
  ) => {
    const source = nodes.find((node) => node.id == sourceId);
    const target = nodes.find((node) => node.id == targetId);
    if (!source?.rect || !target?.rect) return;

    const sourceHandlePos = getHandlePosition(
      source.sourcePosition,
      source.rect,
      // sourceHandle (HandleElement)
    );
    const targetHandlePos = getHandlePosition(
      target.targetPosition,
      target.rect,
      // targetHandle (HandleElement)
    );

    return {
      sourceX: sourceHandlePos.x,
      sourceY: sourceHandlePos.y,
      targetX: targetHandlePos.x,
      targetY: targetHandlePos.y,
    };
  };
</script>

<svg class="svelte-flow-edge-renderer">
  {#each $edges as edge}
    {@const pos = getEdgePositions($nodes, edge.source, edge.target)}
    <svelte:component
      this={$edgeTypes[edge.type] || $edgeTypes?.default}
      sourceX={pos?.sourceX}
      sourceY={pos?.sourceY}
      targetX={pos?.targetX}
      targetY={pos?.targetY}
    />
  {/each}
</svg>

<style lang="sass">
  .svelte-flow-edge-renderer
    width: 100%
    height: 100%
</style>
