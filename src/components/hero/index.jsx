import FormattedText from "@/lib/FormattedText";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const Hero = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  image,
  darkVariant,
  backgroundColor,
}) => {
  const heroVariants = cva("", {
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
      className={heroVariants({
        colorScheme: darkVariant ? "dark" : "light",
        backgroundColor,
      })}
    >
      <div className="mx-auto max-w-screen-xl sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="flex max-w-xl flex-col gap-8">
            <h2 className="from-peach to-mauve tracking-relaxed text-balance bg-gradient-to-r bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
              {title}
            </h2>
            <FormattedText
              as="p"
              className="text-text text-balance leading-relaxed"
            >
              {description}
            </FormattedText>
            <div>
              <a
                href={buttonLink}
                className={cn(
                  "bg-mauve text-inverted-text hover:bg-mauve/75 inline-block rounded-sm px-12 py-3 text-sm font-medium transition",
                  "focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-offset-2",
                )}
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        </div>
        <div className="h-full w-full overflow-hidden rounded-3xl py-6 md:py-8 lg:py-14">
          <img
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
            className="sm:rounded-l-4xl dark:border-surface-0 h-full w-full object-cover object-right shadow-lg xl:rounded-r-xl dark:border dark:shadow-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
