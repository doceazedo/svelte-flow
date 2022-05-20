<script lang="ts">
  import { SvelteFlow } from '$lib';
  import { Container } from '../../container';
  import { nodes, edges } from './data';
</script>

<Container>
  <SvelteFlow {nodes} {edges} />
</Container>

<style lang="sass">
  :global(.my-custom-style)
    background-color: #D6D5E6 !important
    color: #222138
    border: 1px solid #222138 !important
    width: 195px
</style>
