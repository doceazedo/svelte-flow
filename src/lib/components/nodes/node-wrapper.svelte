<script lang="ts">
  import interact from 'interactjs';
  import { onMount } from 'svelte';
  import type { HandleElement } from '$lib/types';

  export let x = 0,
    y = 0,
    element: HTMLElement;
  export const handles: HandleElement[] = [];

  const handleClass = 'svelte-flow-handle';

  const move = (event) => {
    x += event.dx;
    y += event.dy;
    // updateSizePos();
  };

  onMount(() => {
    interact(element, {
      styleCursor: false,
    }).draggable({
      ignoreFrom: handleClass,
      autoScroll: true,
      listeners: { move },
    });
  });
</script>

<div
  bind:this={element}
  class="svelte-flow-node-wrapper"
  style="transform: translate({x}px, {y}px)"
>
  <slot />
</div>

<style lang="sass">
  .svelte-flow-node-wrapper
    position: absolute
    width: fit-content // FIXME: check if this is needed later
    user-select: none
    cursor: grab
</style>
