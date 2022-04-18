<script lang="ts">
  import { EdgeText } from '.';

  export let path: string,
    centerX = 0,
    centerY = 0,
    label: string = null,
    labelShowBg: boolean = null,
    labelBgPadding: [number, number] = null,
    labelBgBorderRadius: number = null;
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
