import Paragraph from "@/components/paragraph";
import Section from "@/components/section";

import { getComponentExamples } from "./lib/get-examples";

const args = await getComponentExamples("paragraph");

export default {
  title: "Components/Paragraph",
  component: Paragraph,
};

const Decorator = ({ children, dark = false }) => (
  <Section darkVariant={dark} content={children} />
);

export const Default = {
  args,
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Dark = {
  args,
  decorators: [
    (Story) => (
      <Decorator dark>
        <Story />
      </Decorator>
    ),
  ],
};
