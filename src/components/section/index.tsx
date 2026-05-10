import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

const sectionVariants = cva('', {
  variants: {
    colorScheme: {
      light: '',
      dark: 'dark',
    },
    backgroundColor: {
      cream: 'bg-cream',
      paper: 'bg-paper',
      'sage-band': 'bg-sage-band',
      navy: 'bg-navy',
    },
  },
  defaultVariants: {
    colorScheme: 'light',
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
  darkVariant?: boolean;
}

function Section({
  backgroundColor,
  className,
  content,
  darkVariant,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants({
          backgroundColor,
          colorScheme: darkVariant ? 'dark' : 'light',
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
