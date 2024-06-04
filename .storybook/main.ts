import type { StorybookConfig } from "@storybook/nextjs";
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const { merge } = require("webpack-merge");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) =>
    merge(config, {
      plugins: [new VanillaExtractPlugin()],
    }),
};
export default config;
