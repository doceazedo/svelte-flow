import ExampleOverview from './overview.svelte';

export default {
  title: 'Examples',
  component: ExampleOverview,
};

const Template = () => ({
  Component: ExampleOverview,
});

export const Overview = Template.bind({});
