const path = require('path');
const preprocess = require('svelte-preprocess');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    "preprocess": preprocess()
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      $lib: path.resolve(__dirname, '../src/lib'),
    };
    return config;
  }
}