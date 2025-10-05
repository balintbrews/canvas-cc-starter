import Footer from "@/components/footer";
import Logo from "@/components/logo";

import { getComponentExamples } from "./lib/get-examples";

const exampleFooterArgs = await getComponentExamples("footer");

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["base", "mantle", "crust"],
    },
  },
};

export const Default = {
  args: {
    branding: <Logo />,
    ...exampleFooterArgs[0],
  },
};

export const Dark = {
  args: {
    branding: <Logo />,
    ...exampleFooterArgs[0],
    darkVariant: true,
  },
};

export const Empty = {};
