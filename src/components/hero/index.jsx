import { cn } from "@/lib/utils";

const Hero = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  image,
  darkVariant,
}) => {
  return (
    <section className={cn("bg-base overflow-hidden", darkVariant && "dark")}>
      <div className="mx-auto max-w-screen-xl sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="flex max-w-xl flex-col gap-8">
            <h2 className="from-peach to-mauve tracking-relaxed text-balance bg-gradient-to-r bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
              {title}
            </h2>
            <p className="text-text text-balance leading-relaxed">
              {description}
            </p>
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
        <img
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </div>
    </section>
  );
};

export default Hero;
