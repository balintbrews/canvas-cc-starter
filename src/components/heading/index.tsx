import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef } from 'react';

export interface HeadingProps extends Omit<
  ComponentPropsWithoutRef<'h2'>,
  'children'
> {
  text: string;
}

function Heading({ className, text, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        'max-w-5xl font-serif text-3xl leading-tight font-normal text-balance text-text',
        className,
      )}
      {...props}
    >
      {text}
    </h2>
  );
}

export { Heading };
export default Heading;
