import Logo from "@/components/logo";
import Section from "@/components/section";

export default {
  title: "Components/Logo",
  component: Logo,
};

const Decorator = ({ children, dark = false }) => (
  <Section darkVariant={dark} content={children} />
);

export const Default = {
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Dark = {
  decorators: [
    (Story) => (
      <Decorator dark>
        <Story />
      </Decorator>
    ),
  ],
};

export const NoLink = {
  args: {
    linkToFrontPage: false,
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
