import Hero from "@/components/hero";

import { getComponentExamples } from "./lib/get-examples";

const exampleHeroArgs = await getComponentExamples("hero");

export default {
  title: "Components/Hero",
  component: Hero,
};

export const Default = {
  args: exampleHeroArgs[0],
};

export const Dark = {
  args: {
    ...exampleHeroArgs[0],
    darkVariant: true,
  },
};
