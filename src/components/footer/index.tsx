import { hasEmptySlotPlaceholder } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { cn, FormattedText } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

const footerVariants = cva('', {
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

type FooterBackgroundColor = NonNullable<
  VariantProps<typeof footerVariants>['backgroundColor']
>;

const footerMenu = [
  { title: 'Home', url: '/page/home' },
  { title: 'Services', url: '/page/services' },
  { title: 'Blog', url: '/page/blog' },
  { title: 'About', url: '/page/about' },
  { title: 'Careers', url: '/page/careers' },
];

const socialLinks = [
  { iconName: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com' },
  { iconName: 'x', label: 'X', url: 'https://x.com' },
  { iconName: 'mail', label: 'Email', url: 'mailto:hello@example.com' },
];

const getIconMaskStyle = (iconName: string): CSSProperties => ({
  maskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconName}.svg)`,
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
  maskSize: 'contain',
  WebkitMaskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconName}.svg)`,
  WebkitMaskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
});

function XLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

export interface FooterProps extends Omit<
  ComponentPropsWithoutRef<'footer'>,
  'children'
> {
  backgroundColor: FooterBackgroundColor;
  branding?: ReactNode;
  copyrightNotice: string;
  darkVariant?: boolean;
}

function Footer({
  backgroundColor,
  branding,
  className,
  copyrightNotice,
  darkVariant,
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn(
        footerVariants({
          backgroundColor,
          colorScheme: darkVariant ? 'dark' : 'light',
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:items-center lg:px-16">
        <div className="flex flex-col gap-3">
          <div
            className={cn(
              'h-10 shrink-0 items-center justify-start',
              hasEmptySlotPlaceholder(branding) && 'min-w-32',
            )}
          >
            {branding}
          </div>
          <FormattedText
            as="div"
            className="text-xs leading-5 text-text/65 md:text-sm"
          >
            {copyrightNotice}
          </FormattedText>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-8 text-sm">
          {footerMenu.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="text-text transition-colors hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex gap-4 md:justify-end">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              className="inline-flex size-10 items-center justify-center rounded-full border border-text/30 text-text transition hover:border-green hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              aria-label={item.label}
            >
              {item.iconName === 'x' ? (
                <XLogoIcon />
              ) : (
                <span
                  aria-hidden="true"
                  className="size-5 bg-current"
                  style={getIconMaskStyle(item.iconName)}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;
