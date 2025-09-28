import Header from "@/components/header";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";

export default {
  title: "Components/Header",
  component: Header,
};

export const Default = {
  args: {
    branding: <Logo />,
    navigation: <Navigation />,
  },
};

export const Dark = {
  args: {
    branding: <Logo />,
    navigation: <Navigation />,
    darkVariant: true,
  },
};

export const Empty = {};
