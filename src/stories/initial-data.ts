import type { NodeData } from '$lib/svelte-flow.types';

export const nodes: NodeData[] = [
  {
    id: '1',
    position: { x: -164, y: -112 },
    handles: [
      {
        id: '1',
        position: 'right'
      }
    ],
    data: {
      label: 'My first node'
    }
  },
  {
    id: '2',
    position: { x: 164, y: 112 },
    handles: [
      {
        id: '1',
        position: 'left'
      }
    ],
    data: {
      label: 'Cute node (✿◠‿◠)'
    }
  },
  {
    id: '3',
    position: { x: -160, y: 64 },
    handles: [
      {
        id: '1',
        position: 'bottom',
        links: [
          {
            nodeId: '4',
            handleId: '1'
          }
        ],
      }
    ],
    data: {
      label: 'Linked by default'
    }
  },
  {
    id: '4',
    position: { x: -340, y: 210 },
    handles: [
      {
        id: '1',
        position: 'top'
      }
    ],
    data: {
      label: 'Svelte rocks!'
    }
  }
];
