import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const Header = ({ content, darkVariant, backgroundColor = "base" }) => {
  const colorVariants = cva("", {
    variants: {
      colorScheme: {
        light: "",
        dark: "dark",
      },
      backgroundColor: {
        base: "bg-base",
        "surface-0": "bg-surface-0",
        "surface-1": "bg-surface-1",
        "surface-2": "bg-surface-2",
      },
    },
  });

  return (
    <section
      className={cn(
        colorVariants({
          colorScheme: darkVariant ? "dark" : "light",
          backgroundColor,
        }),
      )}
    >
      <div className="min-w-sm mx-auto flex max-w-screen-xl flex-col items-center gap-6 p-12 px-4 md:p-16 md:px-12 lg:gap-8 lg:px-16">
        {content}
      </div>
    </section>
  );
};

export default Header;
