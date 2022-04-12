const path = require('path');
const preprocess = require('svelte-preprocess');

const replaceFileExtension = (filePath, newExtension) => {
  const { name, root, dir } = path.parse(filePath);
    return path.format({
      name,
      root,
      dir,
      ext: newExtension,
  });
};

const fixCjsGeneratedStories = (config) => {
  // Find the plugin instance that needs to be mutated
  const virtualModulesPlugin = config.plugins.find(
    (plugin) => plugin.constructor.name === 'VirtualModulesPlugin',
  );
  // Change the file extension to .cjs for all files that end with "generated-stories-entry.js"
  virtualModulesPlugin._staticModules = Object.fromEntries(
    Object.entries(virtualModulesPlugin._staticModules).map(([key, value]) => {
      if (key.endsWith('generated-stories-entry.js')) {
        return [replaceFileExtension(key, '.cjs'), value];
      }
      return [key, value];
    }),
  );
  // Change the entry points to point to the appropriate .cjs files
  config.entry = config.entry.map((entry) => {
    if (entry.endsWith('generated-stories-entry.js')) {
      return replaceFileExtension(entry, '.cjs');
    }
    return entry;
  });
  return config;
};

const babelPluginOptions = {
  loose: true,
  modules: 'commonjs',
  targets: {
    esmodules: true,
  },
};

const babelLoaderEsModules = (config) => {
  // Configure babel-loader to use esmodules.
  config.module.rules.forEach((rule) => {
    if (!rule?.test?.source.includes('js')) return;
    if (!Array.isArray(rule.use) || rule.use.length <= 0) return;
    const use = rule.use[0];
    if (!use.loader.includes('babel-loader')) return;
    if (!Array.isArray(use.options.plugins)) return;
    const { plugins } = use.options;
    plugins.forEach((plugin, i) => {
      if (Array.isArray(plugin)) {
        plugin[1] = { ...plugin[1], ...babelPluginOptions };
      } else {
        /* ref to plugin */
        plugins[i] = [plugin, babelPluginOptions];
      }
    });
  });
  return config;
};

const noFullySpecified = (config) => {
  // Remove fully-specified file-extension requirement.
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
  ];
  return config;
};

const sveltekitAlias = (config) => {
  // Set SvelteKit aliases.
  config.resolve.alias = {
    ...config.resolve.alias,
    svelte: `${__dirname}/../node_modules/svelte`,
    $lib: `${__dirname}/../src/lib`,
  };
  return config;
};

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    'storybook-dark-mode',
  ],
  framework: '@storybook/svelte',
  core: {
    builder: 'webpack5',
  },
  svelteOptions: {
    preprocess: preprocess({
      typescript: {
        compilerOptions: {
          target: 'es2018',
        },
      },
      babel: {
        plugins: [
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
        ],
      },
    }),
  },
  webpackFinal: async (config) => {
    config = fixCjsGeneratedStories(config);
    config = babelLoaderEsModules(config);
    config = noFullySpecified(config);
    config = sveltekitAlias(config);
    return config;
  },
};
