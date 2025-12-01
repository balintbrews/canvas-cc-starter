import { recommended as drupalCanvasRecommended } from "@drupal-canvas/eslint-config";
import storybook from "eslint-plugin-storybook";

export default [
  { ignores: ["dist", "node_modules", "storybook-static"] },
  ...drupalCanvasRecommended,
  ...storybook.configs["flat/recommended"],
];
