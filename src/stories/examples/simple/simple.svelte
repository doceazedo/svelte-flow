<script lang="ts">
  import { SvelteFlow } from '$lib';
  import { Container } from '../../container';
  import { nodes, edges } from './data';
</script>

<Container>
  <SvelteFlow {nodes} {edges} />
</Container>
