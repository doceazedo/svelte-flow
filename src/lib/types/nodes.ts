import type { SvelteComponent } from 'svelte';
import type { Position, XYPosition } from './utils';
import type { HandleElement } from './handles';

export type NodeData = {
  label: string | typeof SvelteComponent;
  [key: string]: any;
};

export type Node = {
  id: string;
  position: XYPosition;
  type?: string;
  targetPosition?: Position;
  sourcePosition?: Position;
  data?: NodeData;
  className?: string;
  // width?: number;
  // height?: number;

  // only used internally
  element?: HTMLElement;
  handles?: HandleElement[];
  // positionAbsolute?: XYPosition;
};
