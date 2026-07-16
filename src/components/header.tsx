import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

const headerVariants = cva('', {
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

type HeaderBackgroundColor = NonNullable<
  VariantProps<typeof headerVariants>['backgroundColor']
>;

export interface HeaderProps extends Omit<
  ComponentPropsWithoutRef<'header'>,
  'children'
> {
  backgroundColor: HeaderBackgroundColor;
  branding?: ReactNode;
  navigation?: ReactNode;
}

function Header({
  backgroundColor,
  branding,
  className,
  navigation,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        headerVariants({
          backgroundColor,
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-x-8 px-5 py-4 sm:px-8 lg:px-16">
        <div className="h-10 min-w-32 shrink-0 items-center justify-start md:h-12">
          {branding}
        </div>
        <div className="flex min-h-12 grow items-center justify-end">
          {navigation}
        </div>
      </div>
    </header>
  );
}

export { Header };
export default Header;
