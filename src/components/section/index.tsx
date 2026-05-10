import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

const sectionVariants = cva('', {
  variants: {
    backgroundColor: {
      cream: 'bg-cream',
      paper: 'bg-paper',
      mist: 'bg-mist',
      navy: 'dark bg-navy',
    },
  },
});

type SectionBackgroundColor = NonNullable<
  VariantProps<typeof sectionVariants>['backgroundColor']
>;

export interface SectionProps extends Omit<
  ComponentPropsWithoutRef<'section'>,
  'children' | 'content'
> {
  backgroundColor?: SectionBackgroundColor;
  content?: ReactNode;
}

function Section({
  backgroundColor,
  className,
  content,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants({
          backgroundColor,
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-8 px-5 py-10 sm:px-8 md:py-12 lg:px-16">
        {content}
      </div>
    </section>
  );
}

export { Section };
export default Section;
