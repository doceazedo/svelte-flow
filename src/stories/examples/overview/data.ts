import CustomLabel from './custom-label.svelte';
import type { Edge, Node } from '$lib/types';

export const nodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: {
      label: 'Welcome to Svelte Flow!',
    },
    position: { x: 0, y: -175 },
  },
  {
    id: '2',
    data: {
      label: CustomLabel,
    },
    position: { x: -150, y: -50 },
  },
  {
    id: '3',
    data: {
      label: 'This one has a custom style',
    },
    position: { x: 150, y: -50 },
    className: 'my-custom-style',
  },
  {
    id: '4',
    position: { x: 0, y: 75 },
    data: {
      label: 'Another default node',
    },
  },
  {
    id: '5',
    data: {
      label: 'Node id: 5',
    },
    position: { x: 0, y: 175 },
  },
];

export const edges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e1-3', source: '1', target: '3' },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    label: 'animated edge',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    label: 'edge with arrow head',
  },
];
