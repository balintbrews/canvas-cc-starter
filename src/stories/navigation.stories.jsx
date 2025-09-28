import Navigation from "@/components/navigation";
import { cn } from "@/lib/utils";

export default {
  title: "Navigation",
  component: Navigation,
};

const Decorator = ({ className, children }) => (
  <div
    className={cn(
      "flex h-24 items-center justify-end px-4 sm:px-12 md:h-32 lg:px-16",
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
