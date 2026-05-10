import { cva } from 'class-variance-authority';
import { cn, FormattedText } from 'drupal-canvas';
import type { CSSProperties, HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

const cardVariants = cva('bg-transparent', {
  variants: {
    variant: {
      standard: 'flex gap-6 px-0 py-6 md:px-8 md:py-7',
      spotlight:
        'flex flex-col gap-6 px-0 py-8 md:flex-row md:items-center md:gap-10 md:px-12 md:py-12',
    },
  },
  defaultVariants: {
    variant: 'standard',
  },
});

type CardVariant = NonNullable<VariantProps<typeof cardVariants>['variant']>;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  description?: string;
  iconNameFromLucide?: string;
  title?: string;
  variant?: CardVariant;
}

function Card({
  className,
  description,
  iconNameFromLucide,
  title,
  variant,
  ...props
}: CardProps) {
  const iconMaskStyle: CSSProperties | undefined = iconNameFromLucide
    ? {
        maskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconNameFromLucide}.svg)`,
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconNameFromLucide}.svg)`,
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
      }
    : undefined;

  return (
    <div className={cn(cardVariants({ variant }), className)} {...props}>
      {iconNameFromLucide && (
        <div
          className={cn(
            'flex shrink-0 items-center justify-center rounded-full bg-surface-0',
            variant === 'spotlight' ? 'size-20 md:size-24' : 'size-16',
          )}
        >
          <div
            className={cn(
              variant === 'spotlight' ? 'size-10 md:size-12' : 'size-8',
              'bg-green',
            )}
            style={iconMaskStyle}
          />
        </div>
      )}
      <div className="min-w-0">
        {title && (
          <h3
            className={cn(
              'text-text',
              variant === 'spotlight'
                ? 'mb-3 max-w-2xl font-serif text-3xl leading-tight font-normal md:text-4xl'
                : 'mb-2 text-base leading-5 font-bold',
            )}
          >
            {title}
          </h3>
        )}
        {description && (
          <FormattedText
            as="div"
            className={cn(
              'text-subtext-0',
              variant === 'spotlight'
                ? 'max-w-4xl text-base leading-7'
                : 'text-sm leading-6',
            )}
          >
            {description}
          </FormattedText>
        )}
      </div>
    </div>
  );
}

export { Card };
export default Card;
