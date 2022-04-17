import type { SvelteComponent } from 'svelte';

export type Position = 'top' | 'right' | 'bottom' | 'left';

export type XYPosition = {
  x: number;
  y: number;
};

export type ComponentsList = {
  [key: string]: typeof SvelteComponent;
};
