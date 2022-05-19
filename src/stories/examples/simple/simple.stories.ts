import ExampleSimple from './simple.svelte';

export default {
  title: 'Examples',
  component: ExampleSimple,
};

const Template = () => ({
  Component: ExampleSimple,
});

export const Simple = Template.bind({});
