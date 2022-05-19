import type { Position } from './utils';

export type HandleType = 'source' | 'target';

export type HandleElement = {
  id: string;
  type: HandleType;
  position: Position;
  element: HTMLElement;
};
