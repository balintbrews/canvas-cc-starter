import Header from "@/components/header";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";

const SampleHomepage = () => {
  return (
    <>
      <Header
        branding={<Logo />}
        navigation={<Navigation />}
        darkVariant={true}
      />
    </>
  );
};

export default {
  title: "Sample pages/Homepage",
  component: SampleHomepage,
};

export const Homepage = {};
