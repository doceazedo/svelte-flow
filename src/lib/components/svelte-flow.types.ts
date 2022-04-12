export type PathCoords = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export type HandlePosition = 'top' | 'right' | 'bottom' | 'left';

export type Handle = {
  id: string;
  position: HandlePosition;
  label?: string;
  element?: HTMLElement;
  links?: ForeignHandle[];
};

export type ForeignHandle = {
  nodeId?: string;
  handleId?: string;
  draft?: {
    endX: number;
    endY: number;
  };
}

export type NodeData = {
  id: string;
  position: { x: number, y: number };
  handles: Handle[];
  data: {
    label: string;
  };
};
