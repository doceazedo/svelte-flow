import type { Position } from './utils';

export type HandleType = 'source' | 'target';

export type HandleElement = {
  id: string;
  position: Position;
  element: HTMLElement;
};
