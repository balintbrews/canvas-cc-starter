import Header from "@/components/header";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import Paragraph from "@/components/paragraph";
import PricingTable from "@/components/pricing-table";
import Section from "@/components/section";

import { getComponentExamples } from "../lib/get-examples";

const sampleHeroArgs = await getComponentExamples("hero");
const sampleSectionArgs = await getComponentExamples("section");
const sampleHeadingArgs = await getComponentExamples("heading");
const sampleParagraphArgs = await getComponentExamples("paragraph");
const samplePricingTableArgs = await getComponentExamples("pricing-table");

const SampleHomepage = () => {
  return (
    <>
      <Header
        branding={<Logo />}
        navigation={<Navigation />}
        darkVariant={true}
      />
      <Hero {...sampleHeroArgs} darkVariant={true} />
      <Section
        {...sampleSectionArgs}
        content={
          <>
            <Heading {...sampleHeadingArgs} />
            <Paragraph {...sampleParagraphArgs} />
          </>
        }
      />
      <Section
        darkVariant={true}
        content={
          <>
            <Heading text="Simple, transparent pricing" />
            <PricingTable {...samplePricingTableArgs} />
          </>
        }
      />
    </>
  );
};

export default {
  title: "Sample pages/Homepage",
  component: SampleHomepage,
};

export const Homepage = {};
