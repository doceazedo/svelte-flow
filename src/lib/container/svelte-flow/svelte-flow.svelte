<script lang="ts">
  import { GraphView } from '$lib/container/graph-view';
  import { DefaultNode, InputNode, OutputNode } from '$lib/components/nodes';
  import { BezierEdge } from '$lib/components/edges';
  import { Attribution } from '$lib/components/attribution';
  import { setFlowContexts } from '$lib/contexts';
  import type { ComponentsList, Edge, Node } from '$lib/types';

  const defaultNodeTypes = {
    default: DefaultNode,
    input: InputNode,
    output: OutputNode,
  };

  const defaultEdgeTypes = {
    default: BezierEdge,
  };

  export let nodes: Node[] = [],
    edges: Edge[] = [],
    nodeTypes: ComponentsList = null,
    edgeTypes: ComponentsList = null;

  setFlowContexts(
    nodes,
    edges,
    { ...defaultNodeTypes, ...nodeTypes },
    { ...defaultEdgeTypes, ...edgeTypes },
  );
</script>

<div class="svelte-flow-wrapper">
  <GraphView />
  <Attribution />
</div>

<style lang="sass">
  .svelte-flow-wrapper
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
</style>
