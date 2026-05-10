import { LogoMark } from '@/components/logo';
import { cn, FormattedText, Image } from 'drupal-canvas';
import type { ComponentPropsWithoutRef } from 'react';
import type { CanvasImage } from '@/lib/types';

export interface ImageFeatureProps extends Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> {
  description: string;
  eyebrow?: string;
  image: CanvasImage;
  title: string;
}

function ImageFeature({
  className,
  description,
  eyebrow,
  image,
  title,
  ...props
}: ImageFeatureProps) {
  return (
    <div
      className={cn(
        'grid gap-8 py-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-12 lg:gap-16',
        className,
      )}
      {...props}
    >
      <div className="relative min-h-72 overflow-hidden rounded-lg bg-surface-0 md:min-h-96">
        <Image
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
          sizes="(min-width: 768px) 42vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/10" aria-hidden="true" />
        <div
          className="absolute right-5 bottom-5 flex h-14 w-24 items-center justify-center rounded-lg bg-paper/90 shadow-sm backdrop-blur"
          aria-hidden="true"
        >
          <LogoMark className="h-10" primaryClassName="fill-navy" />
        </div>
      </div>

      <div className="max-w-2xl py-2">
        {eyebrow && (
          <p className="mb-4 text-base leading-6 font-semibold text-green dark:text-green">
            {eyebrow}
          </p>
        )}
        <h2 className="max-w-2xl font-serif text-4xl font-normal text-balance text-text md:text-5xl">
          {title}
        </h2>
        <FormattedText
          as="div"
          className="mt-5 max-w-2xl text-base leading-7 text-balance text-subtext-0 md:text-lg"
        >
          {description}
        </FormattedText>
      </div>
    </div>
  );
}

export { ImageFeature };
export default ImageFeature;
