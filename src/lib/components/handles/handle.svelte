<script lang="ts">
  import { setContext, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { getDraggableHandle, getDropzoneHandle } from '.';
  import type {
    Connection,
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

  let handleEl: HTMLDivElement;
  let draggableEl: HTMLDivElement;
  let isDraggedIn = false;
  let nodeId: string;

  let pos = writable<XYPosition>({
    x: 0,
    y: 0,
  });
  setContext('pos', pos);

  onMount(() => {
    const draggableHandle = getDraggableHandle(draggableEl);
    const dropzoneHandle = getDropzoneHandle(handleEl);
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
    data-nodeid={nodeId}
    data-handleid={id}
    class="svelte-flow-handle-draggable"
    style="transform: translate({$pos.x}px, {$pos.y}px)"
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
