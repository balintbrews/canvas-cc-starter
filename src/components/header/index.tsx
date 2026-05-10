import { hasEmptySlotPlaceholder } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

const headerVariants = cva('', {
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
  darkVariant?: boolean;
  navigation?: ReactNode;
}

function Header({
  backgroundColor,
  branding,
  className,
  darkVariant,
  navigation,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        headerVariants({
          backgroundColor,
          colorScheme: darkVariant ? 'dark' : 'light',
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-x-8 px-5 py-4 sm:px-8 lg:px-16">
        <div
          className={cn(
            'h-10 shrink-0 items-center justify-start md:h-12',
            hasEmptySlotPlaceholder(branding) && 'min-w-32',
          )}
        >
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
