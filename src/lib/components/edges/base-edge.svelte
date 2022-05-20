<script lang="ts">
  import { EdgeText } from '.';

  export let path: string,
    centerX = 0,
    centerY = 0,
    label: string = null,
    labelShowBg = true,
    labelBgPadding: [number, number] = [2, 4],
    labelBgBorderRadius: number = 2;
</script>

<path d={path} />
{#if label}
  <EdgeText
    {centerX}
    {centerY}
    {label}
    {labelShowBg}
    {labelBgPadding}
    {labelBgBorderRadius}
  />
{/if}

<style lang="sass">
  path
    fill: none
    stroke: #cbcbcb
</style>
