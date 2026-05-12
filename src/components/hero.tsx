import { useId } from 'react';
import { cva } from 'class-variance-authority';
import { cn, FormattedText } from 'drupal-canvas';
import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

const heroVariants = cva('', {
  variants: {
    backgroundColor: {
      cream: 'bg-cream',
      paper: 'bg-paper',
      mist: 'bg-mist',
      navy: 'dark bg-navy',
    },
  },
  defaultVariants: {
    backgroundColor: 'cream',
  },
});

type HeroBackgroundColor = NonNullable<
  VariantProps<typeof heroVariants>['backgroundColor']
>;

const flowLines = [-92, -70, -48, -28, -10, 8, 28, 48, 70, 92];

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export interface HeroProps extends Omit<
  ComponentPropsWithoutRef<'section'>,
  'children'
> {
  backgroundColor: HeroBackgroundColor;
  buttonLabel: string;
  buttonLink: string;
  description: string;
  title: string;
}

function HeroGraphic({ isNavy = false }: { isNavy?: boolean }) {
  const gradientId = useId().replace(/:/g, '');
  const fadeId = useId().replace(/:/g, '');
  const linePrimaryColor = isNavy
    ? 'var(--color-sage)'
    : 'var(--color-deep-green)';
  const lineSecondaryColor = 'var(--color-green)';

  return (
    <div className="relative h-full min-h-[24rem] w-[clamp(44rem,62vw,62rem)] overflow-hidden">
      <svg
        viewBox="0 0 700 500"
        className="absolute inset-0 h-full w-full origin-center"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={isNavy ? 'var(--color-mist)' : 'var(--color-sage)'}
            />
            <stop
              offset="100%"
              stopColor={isNavy ? 'var(--color-sage)' : 'var(--color-paper)'}
            />
          </linearGradient>
          <radialGradient id={fadeId} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="var(--color-paper)" />
            <stop
              offset="100%"
              stopColor={isNavy ? 'var(--color-mist)' : 'var(--color-paper)'}
            />
          </radialGradient>
        </defs>

        <g opacity="0.55">
          {Array.from({ length: 11 }, (_, index) => (
            <circle
              key={index}
              cx="266"
              cy="246"
              r={92 + index * 14}
              fill="none"
              stroke={isNavy ? 'var(--color-sage)' : 'var(--color-green)'}
              strokeDasharray="1 8"
              strokeWidth="1"
            />
          ))}
        </g>

        <circle
          cx="270"
          cy="248"
          r="112"
          fill={`url(#${gradientId})`}
          opacity="0.95"
        />
        <circle
          cx="382"
          cy="248"
          r="112"
          fill={isNavy ? 'var(--color-surface-2)' : 'var(--color-navy)'}
        />
        <circle
          cx="326"
          cy="248"
          r="74"
          fill={`url(#${fadeId})`}
          opacity="0.86"
        />

        {flowLines.map((offset, index) => (
          <path
            key={offset}
            d={`M 404 ${248 + offset / 2} C 482 ${228 + offset} 548 ${
              188 + offset
            } 700 ${146 + offset}`}
            fill="none"
            stroke={index % 3 === 0 ? linePrimaryColor : lineSecondaryColor}
            strokeWidth="1"
            opacity={isNavy ? '0.58' : '0.45'}
          />
        ))}

        {[
          [518, 196],
          [565, 226],
          [602, 254],
          [548, 292],
          [640, 318],
          [678, 214],
        ].map(([cx, cy], index) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={index % 2 === 0 ? 2.8 : 2.2}
            fill={index % 2 === 0 ? linePrimaryColor : lineSecondaryColor}
            opacity="0.8"
          />
        ))}

        <g transform="translate(306 224)">
          <rect
            width="10"
            height="48"
            rx="5"
            className={isNavy ? 'fill-navy' : 'fill-text'}
          />
          <rect
            x="28"
            width="10"
            height="48"
            rx="5"
            className={isNavy ? 'fill-navy' : 'fill-text'}
          />
          <rect x="14" width="10" height="18" rx="5" className="fill-green" />
          <rect
            x="14"
            y="30"
            width="10"
            height="18"
            rx="5"
            className="fill-green"
          />
        </g>
      </svg>
    </div>
  );
}

function Hero({
  backgroundColor,
  buttonLabel,
  buttonLink,
  className,
  description,
  title,
  ...props
}: HeroProps) {
  return (
    <section
      className={cn(
        'overflow-hidden',
        heroVariants({
          backgroundColor,
        }),
        className,
      )}
      {...props}
    >
      <div className="relative mx-auto min-h-128 max-w-7xl px-5 pt-10 pr-20 pb-10 sm:px-8 sm:pr-24 md:min-h-136 md:pt-12 md:pr-[36vw] md:pb-12 lg:px-16 lg:pt-14 lg:pr-[42vw] lg:pb-8 xl:pr-152">
        <div className="relative z-10">
          <div className="flex max-w-136 flex-col gap-7">
            <h1 className="max-w-136 font-serif text-5xl font-normal text-balance text-text md:text-[3.25rem]">
              {title}
            </h1>
            <FormattedText
              as="div"
              className="max-w-xl text-base leading-7 text-balance text-subtext-0 md:text-lg"
            >
              {description}
            </FormattedText>
            <div>
              <a
                href={buttonLink}
                className="inline-flex min-h-14 items-center gap-3 rounded-lg bg-green px-6 text-base font-bold text-inverted-text shadow-sm transition hover:bg-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                <span>{buttonLabel}</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-[calc(100%-5rem)] flex items-center sm:left-[calc(100%-6rem)] md:left-[max(31rem,54vw)] lg:left-[max(35rem,48vw)] xl:left-[52%]"
          aria-hidden="true"
        >
          <HeroGraphic isNavy={backgroundColor === 'navy'} />
        </div>
      </div>
    </section>
  );
}

export { Hero };
export default Hero;
