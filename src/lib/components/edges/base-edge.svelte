<script lang="ts">
  import { EdgeText } from '.';

  export let path: string,
    centerX: number,
    centerY: number,
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
