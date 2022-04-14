<script lang="ts">
  import interact from 'interactjs';
  import { onMount } from 'svelte';

  export let x = 0,
    y = 0;
  let node: HTMLDivElement;

  const move = (event) => {
    x += event.dx;
    y += event.dy;
  };

  onMount(() => {
    interact(node, {
      styleCursor: false,
    }).draggable({
      ignoreFrom: 'svelte-flow-handle',
      autoScroll: true,
      listeners: { move },
    });
  });
</script>

<div
  class="svelte-flow-node"
  bind:this={node}
  style="transform: translate({x}px, {y}px)"
>
  <slot />
</div>

<style lang="sass">
  .svelte-flow-node
    position: absolute
    padding: .75rem
    width: fit-content
    background-color: #fff
    box-shadow: rgba(#636363, .2) 0 2px 8px 0
    border: 1px solid #cbcbcb
    border-radius: .25rem
    user-select: none
    cursor: grab
</style>
