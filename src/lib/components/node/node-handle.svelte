<script lang="ts">
  import interact from 'interactjs';
  import { onMount } from 'svelte';
  import type { ForeignHandle, HandlePosition } from '../svelte-flow.types';

  export let pos: HandlePosition = 'bottom',
    nodeId: string,
    handleId: string,
    handleEl: HTMLElement = null,
    links: ForeignHandle[] = [],
    addLink: Function;

  let draggableEl: HTMLDivElement;
  let x = 0;
  let y = 0;
  let isDraggedIn = false;

  const move = (event) => {
    if (!links?.[links.length - 1]?.draft) {
      links = [...links, {
        draft: {
          endX: 0,
          endY: 0,
        }
      }];
    }

    x += event.dx;
    y += event.dy;

    const endRect = event.target.getBoundingClientRect();
    links[links.length - 1].draft.endX = endRect.left;
    links[links.length - 1].draft.endY = endRect.top;
  }

  onMount(() => {
    interact(draggableEl, {
      styleCursor: false,
    })
      .draggable({
        autoScroll: true,
        listeners: {
          move,
          end: () => {
            x = 0;
            y = 0;
          }
        }
      });

    interact(handleEl, {
      styleCursor: false,
    })
      .dropzone({
        accept: '.svelte-flow-handle-draggable',
        overlap: 0.25,
        ondragenter: () => isDraggedIn = true,
        ondragleave: () => isDraggedIn = false,
        ondropdeactivate: (event) => {
          if (isDraggedIn) {
            const originNodeId = event.relatedTarget?.dataset?.nodeid || '0';
            const originHandleId = event.relatedTarget?.dataset?.handleid || '0';
            addLink(originNodeId, originHandleId, nodeId, handleId);
          }
          links = links.filter(x => !x?.draft);
        }
      });
  });
</script>

<div
  bind:this={handleEl}
  class="svelte-flow-handle"
  class:svelte-flow-handle-top={pos == 'top'}
  class:svelte-flow-handle-right={pos == 'right'}
  class:svelte-flow-handle-bottom={pos == 'bottom'}
  class:svelte-flow-handle-left={pos == 'left'}
>
  <div
    bind:this={draggableEl}
    data-nodeid={nodeId}
    data-handleid={handleId}
    class="svelte-flow-handle-draggable"
    style="transform: translate({x}px, {y}px)"
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
