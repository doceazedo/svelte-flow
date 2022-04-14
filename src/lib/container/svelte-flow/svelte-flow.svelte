<script lang="ts">
  import { Wrapper } from '.';
  import { DefaultNode } from '$lib/components/nodes';
  import { BezierEdge } from '$lib/components/edges';
  import { Handle } from '$lib/components/handles';
  import type { Edge, HandleElement, Node } from '$lib/types';

  export let nodes: Node[] = [],
    edges: Edge[] = [];

  const offsetX = 6;
  const offsetY = 12;

  const getCoords = (handle: HandleElement, linkIndex: number): PathCoords => {
    const link = handle.links[linkIndex];
    const foreignNode = nodes.find((x) => x.id == link.nodeId);
    const foreignHandle = foreignNode?.handles?.find(
      (x) => x.id == link.handleId,
    );

    if (!handle?.element) return null;

    const linkHandleRect = handle.element.getBoundingClientRect();
    const startPos = {
      startX: linkHandleRect.left - offsetX,
      startY: linkHandleRect.top - offsetY,
    };

    if (link.draft != null)
      return {
        ...startPos,
        endX: link.draft.endX - offsetX,
        endY: link.draft.endY - offsetY,
      };

    if (!foreignHandle?.element) return null;
    const foreignHandleRect = foreignHandle.element.getBoundingClientRect();

    return {
      ...startPos,
      endX: foreignHandleRect.left - offsetX,
      endY: foreignHandleRect.top - offsetY,
    };
  };

  const addLink = (
    nodeId: string,
    handleId: string,
    foreignNodeId: string,
    foreignHandleId: string,
  ) => {
    const nodeIndex = nodes.findIndex((x) => x.id == nodeId);
    const handleIndex = nodes[nodeIndex].handles.findIndex(
      (x) => x.id == handleId,
    );
    nodes[nodeIndex].handles[handleIndex].links.push({
      nodeId: foreignNodeId,
      handleId: foreignHandleId,
    });
    nodes = nodes;
  };
</script>

<Wrapper>
  {#each nodes as node}
    <Node bind:x={node.position.x} bind:y={node.position.y}>
      <NodeContent>
        {node.data.label}
      </NodeContent>

      {#each node.handles || [] as handle}
        <NodeHandle
          pos={handle.position}
          nodeId={node.id}
          handleId={handle.id}
          bind:handleEl={handle.element}
          bind:links={handle.links}
          {addLink}
        />
      {/each}
    </Node>

    {#each node.handles || [] as handle}
      {#each handle.links || [] as link, i}
        <NodePath coords={getCoords(handle, i)} />
      {/each}
    {/each}
  {/each}
</Wrapper>
