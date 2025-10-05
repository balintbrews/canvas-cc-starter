import Hero from "@/components/hero";

import { getComponentExamples } from "./lib/get-examples";

const exampleHeroArgs = await getComponentExamples("hero");

export default {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["base", "mantle", "crust"],
    },
  },
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
