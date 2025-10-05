const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // In most stories we use top-level awaits when invoking the
    // `getComponentExamples()` function.
    // @see src/stories/lib/get-examples.js
    // This would normally break the static Storybook build. Explicitly setting
    // `build.target` for Vite solves it.
    // @see https://github.com/storybookjs/storybook/issues/25399#issuecomment-1905569873
    // @see https://vite.dev/config/build-options.html#build-target
    if (!config.build) {
      config.build = {};
    }
    config.build.target = ["chrome107", "edge107", "firefox104", "safari16"];
    return config;
  },
};

export default config;
