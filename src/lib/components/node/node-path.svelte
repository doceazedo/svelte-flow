<script lang="ts">
  import type { PathCoords } from '../svelte-flow.types';

  export let coords: PathCoords;
  
  let path = '';

  const drawCurve = () => {
    if (!coords) return path = '';

    // M
    const AX = coords.startX;
    const AY = coords.startY;

    // L
    const BX = Math.abs(coords.endX - coords.startX) * 0.05 + coords.startX;
    const BY = coords.startY;

    // C
    const CX = coords.startX + Math.abs(coords.endX - coords.startX) * 0.33;
    const CY = coords.startY;
    const DX = coords.endX - Math.abs(coords.endX - coords.startX) * 0.33;
    const DY = coords.endY;
    const EX = - Math.abs(coords.endX - coords.startX) * 0.05 + coords.endX;
    const EY = coords.endY;

    // L
    const FX = coords.endX;
    const FY = coords.endY;

    // setting up the path string
    path  = 'M' + AX + ',' + AY;
    path += ' L' + BX + ',' + BY;
    path +=  ' ' + 'C' + CX + ',' + CY;
    path += ' ' + DX + ',' + DY;
    path += ' ' + EX + ',' + EY;
    path += ' L' + FX + ',' + FY;
  }

  $: coords, drawCurve();
</script>

<svg class="svelte-flow-path" height="100%" width="100%">
  <path d={path} stroke="#aaa" stroke-width="1" fill="none"></path>
</svg>

<style lang="sass">
  .svelte-flow-path
    position: absolute
    width: 100%
    height: 100%
    pointer-events: none
</style>
