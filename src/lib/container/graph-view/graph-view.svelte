<script lang="ts">
  import { FlowRenderer } from '$lib/container/flow-renderer';
  import { NodeRenderer } from '$lib/container/node-renderer';
  import { EdgeRenderer } from '$lib/container/edge-renderer';
  import { onMount } from 'svelte';

  let isMounted = false;
  onMount(() => (isMounted = true));
</script>

<FlowRenderer>
  <NodeRenderer />
  {#if isMounted}
    <EdgeRenderer />
  {/if}
</FlowRenderer>
