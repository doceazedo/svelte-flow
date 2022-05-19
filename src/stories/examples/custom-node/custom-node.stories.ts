import ExampleCustomNode from './custom-node.svelte';

export default {
  title: 'Examples',
  component: ExampleCustomNode,
};

const Template = () => ({
  Component: ExampleCustomNode,
});

export const CustomNode = Template.bind({});
