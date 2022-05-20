import type { Position } from './utils';

export type Edge = {
  id: string;
  type?: string;
  source: string;
  sourceHandle?: string;
  target: string;
  targetHandle?: string;
  label?: string;
  zIndex?: number;

  // only used internally
  draft?: boolean;
  position?: EdgePosition;
};

export type EdgePosition = {
  sourcePos?: Position;
  sourceX: number;
  sourceY: number;
  targetPos?: Position;
  targetX: number;
  targetY: number;
};
