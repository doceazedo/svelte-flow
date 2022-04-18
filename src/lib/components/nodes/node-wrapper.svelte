<script lang="ts">
  import interact from 'interactjs';
  import { onMount } from 'svelte';

  export let x = 0,
    y = 0,
    rect: DOMRect;

  const handleClass = 'svelte-flow-handle';
  let wrapper: HTMLDivElement;

  const updateSizePos = () => (rect = wrapper.getBoundingClientRect());

  const move = (event) => {
    x += event.dx;
    y += event.dy;
    // updateSizePos();
  };

  onMount(() => {
    updateSizePos();

    interact(wrapper, {
      styleCursor: false,
    }).draggable({
      ignoreFrom: handleClass,
      autoScroll: true,
      listeners: { move },
    });
  });
</script>

<div
  bind:this={wrapper}
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
