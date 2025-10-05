import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";

import { getComponentExamples } from "./lib/get-examples";

const exampleSectionArgs = await getComponentExamples("section");
const exampleHeadingArgs = await getComponentExamples("heading");
const exampleParagraphArgs = await getComponentExamples("paragraph");

export default {
  title: "Components/Section",
  component: Section,
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["base", "mantle", "crust"],
    },
  },
};

export const Default = {
  args: {
    content: (
      <>
        <Heading {...exampleHeadingArgs[0]} />
        <Paragraph {...exampleParagraphArgs[0]} />
      </>
    ),
    ...exampleSectionArgs[0],
    backgroundColor: "base",
  },
};

export const Dark = {
  args: {
    content: (
      <>
        <Heading {...exampleHeadingArgs[0]} />
        <Paragraph {...exampleParagraphArgs[0]} />
      </>
    ),
    ...exampleSectionArgs[0],
    darkVariant: true,
    backgroundColor: "base",
  },
};
