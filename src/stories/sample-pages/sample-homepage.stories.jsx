import Header from "@/components/header";
import Hero from "@/components/hero";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import Section from "@/components/section";

import { getComponentExamples } from "../lib/get-examples";

const sampleHeroArgs = await getComponentExamples("hero");
const sampleSectionArgs = await getComponentExamples("section");

const SampleHomepage = () => {
  return (
    <>
      <Header
        branding={<Logo />}
        navigation={<Navigation />}
        darkVariant={true}
      />
      <Hero {...sampleHeroArgs} darkVariant={true} />
      <Section {...sampleSectionArgs} />
    </>
  );
};

export default {
  title: "Sample pages/Homepage",
  component: SampleHomepage,
};

export const Homepage = {};
