import FormattedText from "@/lib/FormattedText";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const Footer = ({
  branding,
  copyrightNotice,
  darkVariant,
  backgroundColor,
}) => {
  const footerVariants = cva("", {
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
    <footer
      className={footerVariants({
        colorScheme: darkVariant ? "dark" : "light",
        backgroundColor,
      })}
    >
      <div className="min-w-sm mx-auto flex max-w-screen-md flex-col items-center gap-12 p-12 md:p-16">
        <div
          className={cn(
            "h-12 flex-shrink-0 items-center justify-start",
            branding?.props?.value?.includes(
              "canvas--slot-empty-placeholder",
            ) && "min-w-32",
          )}
        >
          {branding}
        </div>
        <FormattedText as="p" className="text-text text-sm">
          {copyrightNotice}
        </FormattedText>
      </div>
    </footer>
  );
};

export default Footer;
