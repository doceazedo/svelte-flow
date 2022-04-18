import interact from 'interactjs';
import { getContext } from 'svelte';
import type { Writable } from 'svelte/store';
import type { XYPosition } from '$lib/types';

// const pos: Writable<XYPosition> = getContext('pos');

export const getDraggableHandle = (target: HTMLElement) => {
  return interact(target, {
    styleCursor: false,
  }).draggable({
    autoScroll: true,
    listeners: {
      move,
      // end,
    },
  });
};

export const getDropzoneHandle = (target: HTMLElement) => {
  const accept = '.svelte-flow-handle-draggable';

  return interact(target, {
    styleCursor: false,
  }).dropzone({
    accept,
    overlap: 0.25,
    // ondragenter: () => (isDraggedIn = true),
    // ondragleave: () => (isDraggedIn = false),
    ondropdeactivate: (event) => {
      // if (isDraggedIn) {
      //   const originNodeId = event.relatedTarget?.dataset?.nodeid || '0';
      //   const originHandleId = event.relatedTarget?.dataset?.handleid || '0';
      //   addLink(originNodeId, originHandleId, nodeId, handleId);
      // }
      // links = links.filter((x) => !x?.draft);
    },
  });
};

const move = (event) => {
  // if (!links?.[links.length - 1]?.draft) {
  //   links = [
  //     ...links,
  //     {
  //       draft: {
  //         endX: 0,
  //         endY: 0,
  //       },
  //     },
  //   ];
  // }
  // pos.set({
  //   x: event.dx,
  //   y: event.dy,
  // });
  // const endRect = event.target.getBoundingClientRect();
  // links[links.length - 1].draft.endX = endRect.left;
  // links[links.length - 1].draft.endY = endRect.top;
};

// const end = () =>
//   pos.set({
//     x: 0,
//     y: 0,
//   });
