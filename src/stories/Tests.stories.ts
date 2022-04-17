import Tests from './Tests.svelte';
import { nodes } from './initial-data';

export default {
  title: 'Examples',
  component: Tests,
  argTypes: {
    nodes: { control: 'object' },
  },
};

const Template = () => ({
  Component: Tests,
});

export const Overview = Template.bind({});
Overview.args = {
  nodes,
};
