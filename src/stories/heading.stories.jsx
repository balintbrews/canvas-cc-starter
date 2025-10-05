import Heading from "@/components/heading";
import Section from "@/components/section";

import { getComponentExamples } from "./lib/get-examples";

const exampleHeadingArgs = await getComponentExamples("heading");

export default {
  title: "Components/Heading",
  component: Heading,
};

const Decorator = ({ children, dark = false }) => (
  <Section darkVariant={dark} content={children} />
);

export const Default = {
  args: exampleHeadingArgs[0],
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Dark = {
  args: exampleHeadingArgs[0],
  decorators: [
    (Story) => (
      <Decorator dark>
        <Story />
      </Decorator>
    ),
  ],
};
