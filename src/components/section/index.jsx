import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const Section = ({ content, darkVariant, backgroundColor = "base" }) => {
  const sectionVariants = cva("", {
    variants: {
      colorScheme: {
        light: "",
        dark: "dark",
      },
      backgroundColor: {
        base: "bg-base",
        mantle: "bg-mantle",
        crust: "bg-crust",
      },
    },
    defaultVariants: {
      colorScheme: "light",
      backgroundColor: "base",
    },
  });

  return (
    <section
      className={cn(
        sectionVariants({
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

export default Section;
