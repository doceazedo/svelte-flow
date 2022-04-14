export type Connection = {
  source?: string;
  target?: string;
  sourceHandle?: string;
  targetHandle?: string;
};

export type OnConnect = (connection: Connection) => void;
