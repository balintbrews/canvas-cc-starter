import Card from "@/components/card";
import Section from "@/components/section";

import { getComponentExamples } from "./lib/get-examples";

const exampleCardArgs = await getComponentExamples("card");

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    iconColor: {
      control: "select",
      options: [
        "text",
        "rosewater",
        "flamingo",
        "pink",
        "mauve",
        "red",
        "maroon",
        "peach",
        "yellow",
        "green",
        "teal",
        "sky",
        "sapphire",
        "blue",
        "lavender",
      ],
    },
  },
};

const Decorator = ({ children, dark = false }) => (
  <Section darkVariant={dark} content={children} />
);

export const Default = {
  args: exampleCardArgs[0],
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Dark = {
  args: exampleCardArgs[0],
  decorators: [
    (Story) => (
      <Decorator dark>
        <Story />
      </Decorator>
    ),
  ],
};

export const WithoutIcon = {
  args: {
    ...exampleCardArgs[0],
    iconNameFromLucide: undefined,
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
