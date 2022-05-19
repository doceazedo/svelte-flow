<script lang="ts">
  import { SvelteFlow } from '$lib';
  import { Container } from '../../container';
  import ColorPickerNode from './color-picker-node.svelte';
  import { nodes, edges } from './data';

  const nodeTypes = {
    colorPickerNode: ColorPickerNode,
  };
</script>

<Container>
  <SvelteFlow {nodes} {edges} {nodeTypes} />
</Container>
