import { cn, FormattedText } from 'drupal-canvas';
import type { CSSProperties, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  description?: string;
  iconNameFromLucide?: string;
  title?: string;
}

function Card({
  className,
  description,
  iconNameFromLucide,
  title,
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
    <div
      className={cn(
        'flex gap-6 bg-transparent px-0 py-6 md:px-8 md:py-7',
        className,
      )}
      {...props}
    >
      {iconNameFromLucide && (
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-surface-0">
          <div className="size-8 bg-green" style={iconMaskStyle} />
        </div>
      )}
      <div className="min-w-0">
        {title && (
          <h3 className="mb-2 text-base leading-5 font-bold text-text">
            {title}
          </h3>
        )}
        {description && (
          <FormattedText as="div" className="text-sm leading-6 text-subtext-0">
            {description}
          </FormattedText>
        )}
      </div>
    </div>
  );
}

export { Card };
export default Card;
