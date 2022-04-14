import type { XYPosition } from './utils';

export type Node = {
  id: string;
  position: XYPosition;
  data: {
    label: string;
  };
};
