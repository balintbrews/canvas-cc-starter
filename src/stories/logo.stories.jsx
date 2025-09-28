import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

export default {
  title: "Components/Logo",
  component: Logo,
};

const Decorator = ({ className, children }) => (
  <div
    className={cn(
      "inline-flex h-24 items-center px-4 sm:px-12 md:h-32 lg:px-16",
      className,
    )}
  >
    {children}
  </div>
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
      <Decorator className="bg-base dark">
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
