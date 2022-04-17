import type { Position, XYPosition } from './utils';

export type NodeData = {
  label: string;
  [key: string]: string;
};

export type Node = {
  id: string;
  position: XYPosition;
  type?: string;
  targetPosition?: Position;
  sourcePosition?: Position;
  data: NodeData;
};
