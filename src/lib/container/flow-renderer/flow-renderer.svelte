<script lang="ts">
  import { select } from 'd3-selection';
  import { zoom } from 'd3-zoom';
  import { onMount } from 'svelte';
  import type { D3ZoomEvent } from 'd3-zoom';

  let flowRenderer: HTMLDivElement;
  let transform = '';
  let backgroundPosition = '';
  let backgroundSize = '';

  const handleZoom = (e: D3ZoomEvent<HTMLDivElement, any>) => {
    const { x, y, k } = e.transform;
    transform = `translate(${x}px, ${y}px) scale(${k})`;
    backgroundPosition = `${x}px ${y}px`;
    backgroundSize = `${1.5 * k}rem ${1.5 * k}rem`;
  };

  onMount(() => {
    select(flowRenderer).call(
      zoom()
        .filter(
          (e) =>
            !e.path.filter((el) => el?.classList?.contains('svelte-flow-node'))
              .length,
        )
        .on('zoom', handleZoom),
    );
  });

  // TODO: zoom/pan
  // TODO: user selection
</script>

<div
  class="svelte-flow-renderer"
  bind:this={flowRenderer}
  style="background-position:{backgroundPosition};background-size:{backgroundSize}"
>
  <div class="svelte-flow-viewport" style="transform:{transform}">
    <slot />
  </div>
</div>

<style lang="sass">
  .svelte-flow-renderer
    display: flex
    width: 100%
    height: 100%
    overflow: hidden
    background: radial-gradient(#cbcbcb 1px, #fff 1px)
    background-size: 1.5rem 1.5rem

  .svelte-flow-viewport
    position: relative
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
</style>
