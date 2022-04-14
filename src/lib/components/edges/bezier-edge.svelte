<script lang="ts">
  import { onMount } from 'svelte';
  import { BaseEdge } from '.';
  import type { Position } from '$lib/types';

  type GetBezierPathParams = {
    sourceX: number;
    sourceY: number;
    sourcePosition?: Position;
    targetX: number;
    targetY: number;
    targetPosition?: Position;
    curvature?: number;
  };

  // export
  type GetControlWithCurvatureParams = {
    pos: Position;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    c: number;
  };

  export let sourceX: number,
    sourceY: number,
    targetX: number,
    targetY: number,
    sourcePosition: Position = 'bottom',
    targetPosition: Position = 'top',
    label: string = null,
    labelShowBg: boolean = null,
    labelBgPadding: [number, number] = null,
    labelBgBorderRadius: number = null,
    curvature: number = null;

  const calculateControlOffset = (distance: number, curvature: number) => {
    if (distance >= 0) return 0.5 * distance;
    return curvature * 25 * Math.sqrt(-distance);
  };

  const getControlWithCurvature = ({
    pos,
    x1,
    y1,
    x2,
    y2,
    c,
  }: GetControlWithCurvatureParams): [number, number] => {
    let ctX: number, ctY: number;
    switch (pos) {
      case 'left':
        {
          ctX = x1 - calculateControlOffset(x1 - x2, c);
          ctY = y1;
        }
        break;
      case 'right':
        {
          ctX = x1 + calculateControlOffset(x2 - x1, c);
          ctY = y1;
        }
        break;
      case 'top':
        {
          ctX = x1;
          ctY = y1 - calculateControlOffset(y1 - y2, c);
        }
        break;
      case 'bottom':
        {
          ctX = x1;
          ctY = y1 + calculateControlOffset(y2 - y1, c);
        }
        break;
    }
    return [ctX, ctY];
  };

  // export
  const getBezierPath = ({
    sourceX,
    sourceY,
    sourcePosition = 'bottom',
    targetX,
    targetY,
    targetPosition = 'top',
    curvature = 0.25,
  }: GetBezierPathParams) => {
    const [sourceControlX, sourceControlY] = getControlWithCurvature({
      pos: sourcePosition,
      x1: sourceX,
      y1: sourceY,
      x2: targetX,
      y2: targetY,
      c: curvature,
    });
    const [targetControlX, targetControlY] = getControlWithCurvature({
      pos: targetPosition,
      x1: targetX,
      y1: targetY,
      x2: sourceX,
      y2: sourceY,
      c: curvature,
    });
    return `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`;
  };

  // export
  // : [number, number, number, number]
  const getBezierCenter = ({
    sourceX,
    sourceY,
    sourcePosition = 'bottom',
    targetX,
    targetY,
    targetPosition = 'top',
    curvature = 0.25,
  }: GetBezierPathParams) => {
    const [sourceControlX, sourceControlY] = getControlWithCurvature({
      pos: sourcePosition,
      x1: sourceX,
      y1: sourceY,
      x2: targetX,
      y2: targetY,
      c: curvature,
    });
    const [targetControlX, targetControlY] = getControlWithCurvature({
      pos: targetPosition,
      x1: targetX,
      y1: targetY,
      x2: sourceX,
      y2: sourceY,
      c: curvature,
    });
    const centerX =
      sourceX * 0.125 +
      sourceControlX * 0.375 +
      targetControlX * 0.375 +
      targetX * 0.125;
    const centerY =
      sourceY * 0.125 +
      sourceControlY * 0.375 +
      targetControlY * 0.375 +
      targetY * 0.125;
    const xOffset = Math.abs(centerX - sourceX);
    const yOffset = Math.abs(centerY - sourceY);
    return [centerX, centerY, xOffset, yOffset];
  };

  let params: GetBezierPathParams;
  let path: string;
  let centerX: number;
  let centerY: number;

  onMount(() => {
    params = {
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      curvature,
    };
    path = getBezierPath(params);
    [centerX, centerY] = getBezierCenter(params);
  });
</script>

<BaseEdge
  {path}
  {centerX}
  {centerY}
  {label}
  {labelShowBg}
  {labelBgPadding}
  {labelBgBorderRadius}
/>
