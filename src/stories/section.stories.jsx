import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";

import { getComponentExamples } from "./lib/get-examples";

const args = await getComponentExamples("section");

const sampleHeadingArgs = await getComponentExamples("heading");
const sampleParagraphArgs = await getComponentExamples("paragraph");

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
    content: (
      <>
        <Heading {...sampleHeadingArgs} />
        <Paragraph {...sampleParagraphArgs} />
      </>
    ),
    ...args,
    backgroundColor: "base",
  },
};

export const Dark = {
  args: {
    content: (
      <>
        <Heading {...sampleHeadingArgs} />
        <Paragraph {...sampleParagraphArgs} />
      </>
    ),
    ...args,
    darkVariant: true,
    backgroundColor: "base",
  },
};
