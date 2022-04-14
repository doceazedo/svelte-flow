<script lang="ts">
  import { onMount } from 'svelte';

  export let centerX: number,
    centerY: number,
    label: string,
    labelShowBg = true,
    labelBgPadding = [2, 4],
    labelBgBorderRadius = 2;

  let textEl: SVGTextElement;
  let textBbox: DOMRect;

  onMount(() => {
    if (textEl) textBbox = textEl.getBBox();
  });
</script>

<g
  transform="translate({centerX - textBbox.width / 2} {centerY -
    textBbox.height / 2})"
>
  {#if labelShowBg}
    <rect
      width={textBbox.width + 2 * labelBgPadding[0]}
      x={-labelBgPadding[0]}
      y={-labelBgPadding[1]}
      height={textBbox.height + 2 * labelBgPadding[1]}
      rx={labelBgBorderRadius}
      ry={labelBgBorderRadius}
    />
  {/if}

  <text
    bind:this={textEl}
    class="react-flow__edge-text"
    y={textBbox.height / 2}
    dy="0.3em"
  >
    {label}
  </text>
  <slot />
</g>
