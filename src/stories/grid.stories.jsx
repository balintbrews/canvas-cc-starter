import Card from "@/components/card";
import Grid from "@/components/grid";
import Section from "@/components/section";

import { getComponentExamples } from "./lib/get-examples";

const exampleCardArgs = await getComponentExamples("card");

export default {
  title: "Components/Grid",
  component: Grid,
};

const Decorator = ({ children, dark = false }) => (
  <Section darkVariant={dark} content={children} />
);

export const Default = {
  args: {
    content: (
      <>
        {exampleCardArgs.map((cardProps, index) => (
          <Card key={index} {...cardProps} />
        ))}
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Dark = {
  args: {
    content: (
      <>
        {exampleCardArgs.map((cardProps, index) => (
          <Card key={index} {...cardProps} />
        ))}
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Decorator dark>
        <Story />
      </Decorator>
    ),
  ],
};
