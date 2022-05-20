import interact from 'interactjs';
import { get } from 'svelte/store';
import { getFlowContexts } from '$lib/contexts';

export const getDraggableHandle = (
  target: HTMLElement,
  start: () => void,
  move: (event: Event) => void,
  end: () => void,
) => {
  return interact(target, {
    styleCursor: false,
  }).draggable({
    autoScroll: true,
    listeners: {
      start,
      move,
      end,
    },
  });
};

export const getDropzoneHandle = (
  target: HTMLElement,
  nodeId: string,
  handleId: string,
  createEdge: (
    source: string,
    sourceHandle: string,
    target: string,
    targetHandle: string,
  ) => void,
) => {
  const accept = '.svelte-flow-handle-draggable';
  let isDraggedIn = false;

  return interact(target, {
    styleCursor: false,
  }).dropzone({
    accept,
    overlap: 0.25,
    ondragenter: () => (isDraggedIn = true),
    ondragleave: () => (isDraggedIn = false),
    ondropdeactivate: (event) => {
      if (isDraggedIn) {
        const sourceNodeId = event.relatedTarget?.dataset?.nodeid;
        const sourceHandleId = event.relatedTarget?.dataset?.handleid;
        createEdge(sourceNodeId, sourceHandleId, nodeId, handleId);
      }
    },
  });
};
