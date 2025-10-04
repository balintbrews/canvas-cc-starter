import Section from "@/components/section";

import { getComponentExamples } from "./lib/get-examples";

const args = await getComponentExamples("section");

export default {
  title: "Components/Section",
  component: Section,
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["base", "surface-0", "surface-1", "surface-2"],
    },
  },
};

export const Default = {
  args: {
    ...args,
    backgroundColor: "base",
  },
};

export const Dark = {
  args: {
    ...args,
    darkVariant: true,
    backgroundColor: "base",
  },
};
