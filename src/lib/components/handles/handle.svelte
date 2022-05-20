<script lang="ts">
  import { setContext, onMount } from 'svelte';
  import { getFlowContexts } from '$lib/contexts';
  import { getDraggableHandle, getDropzoneHandle } from '.';
  import type {
    Connection,
    EdgePosition,
    Edge,
    HandleType,
    Node,
    OnConnect,
    Position,
    XYPosition,
  } from '$lib/types';

  export let type: HandleType,
    node: Node = null,
    position: Position,
    isConnectable: boolean = true,
    onConnect: OnConnect = null,
    isValidConnection: (connection: Connection) => boolean = null,
    id: string = null;

  const { edges } = getFlowContexts();

  let handleEl: HTMLDivElement;
  let draggableEl: HTMLDivElement;

  let pos: XYPosition = {
    x: 0,
    y: 0,
  };

  const oppositePos: { [pos: string]: Position } = {
    left: 'right',
    right: 'left',
    top: 'bottom',
    bottom: 'top',
  };

  const getEdgePosition = (): EdgePosition => {
    const offset = 12; // ???
    const sourceRect = handleEl.getBoundingClientRect();
    const targetRect = draggableEl.getBoundingClientRect();
    const edgesPos = {
      sourceX: sourceRect.x - offset,
      sourceY: sourceRect.y - offset,
      targetX: targetRect.x - offset,
      targetY: targetRect.y - offset,
      sourcePos: position,
      targetPos: oppositePos[position],
    };
    return edgesPos;
  };

  const start = () => {
    const edgePos = getEdgePosition();
    const draft: Edge = {
      id: '',
      source: '',
      target: '',
      position: edgePos,
      draft: true,
    };
    $edges.push(draft);
  };

  const move = (event) => {
    const position = getEdgePosition();
    const i = $edges.findIndex((edge) => edge.draft);
    $edges[i].position = position;

    pos.x += event.dx;
    pos.y += event.dy;
  };

  const end = () => {
    $edges = $edges.filter((edge) => !edge.draft);
    pos = { x: 0, y: 0 };
  };

  const createEdge = (
    source: string,
    sourceHandle: string,
    target: string,
    targetHandle: string,
  ) => {
    const id = `e${source}${sourceHandle || ''}-${target}${targetHandle || ''}`;

    $edges = [
      ...$edges,
      {
        id,
        source,
        sourceHandle,
        target,
        targetHandle,
      },
    ];
    console.log($edges);
  };

  onMount(() => {
    const draggableHandle = getDraggableHandle(draggableEl, start, move, end);
    const dropzoneHandle = getDropzoneHandle(handleEl, node.id, id, createEdge);
    node.handles.push({
      id,
      type,
      position,
      element: handleEl,
    });
  });
</script>

<div
  bind:this={handleEl}
  class="svelte-flow-handle"
  class:svelte-flow-handle-top={position == 'top'}
  class:svelte-flow-handle-right={position == 'right'}
  class:svelte-flow-handle-bottom={position == 'bottom'}
  class:svelte-flow-handle-left={position == 'left'}
>
  <div
    bind:this={draggableEl}
    data-nodeid={node.id}
    data-handleid={id}
    class="svelte-flow-handle-draggable"
    style="transform: translate({pos.x}px, {pos.y}px)"
  />
</div>

<style lang="sass">
  .svelte-flow-handle
    position: absolute
    border: 2px solid #fff
    cursor: crosshair

    &,
    &-draggable
      width: .5rem
      height: .5rem
      background-color: #cbcbcb
      border-radius: 50%

    &-top
      top: -6px
      left: calc(50% - 6px)

    &-right
      top: calc(50% - 6px)
      right: -6px

    &-bottom
      bottom: -6px
      left: calc(50% - 6px)

    &-left
      top: calc(50% - 6px)
      left: -6px
</style>
