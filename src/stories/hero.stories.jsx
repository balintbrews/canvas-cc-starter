import Hero from "@/components/hero";

import { getComponentExamples } from "./lib/get-examples";

const args = await getComponentExamples("hero");

export default {
  title: "Components/Hero",
  component: Hero,
};

export const Default = {
  args,
};

export const Dark = {
  args: {
    ...args,
    darkVariant: true,
  },
};
