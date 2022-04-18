import { writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';
import type { ComponentsList, Edge, Node } from '$lib/types';

const nodesKey = Symbol('nodes');
const edgesKey = Symbol('edges');
const nodeTypesKey = Symbol('nodeTypes');
const edgeTypesKey = Symbol('edgeTypes');

export const setFlowContexts = (
  nodes: Node[],
  edges: Edge[],
  nodeTypes: ComponentsList,
  edgeTypes: ComponentsList,
) => {
  setContext(nodesKey, writable(nodes));
  setContext(edgesKey, writable(edges));
  setContext(nodeTypesKey, writable(nodeTypes));
  setContext(edgeTypesKey, writable(edgeTypes));
};

export const getFlowContexts = () => ({
  nodes: getContext(nodesKey) as Writable<Node[]>,
  edges: getContext(edgesKey) as Writable<Edge[]>,
  nodeTypes: getContext(nodeTypesKey) as Writable<ComponentsList>,
  edgeTypes: getContext(edgeTypesKey) as Writable<ComponentsList>,
});
